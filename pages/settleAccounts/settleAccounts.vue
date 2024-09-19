<template>
	<view class="root">
		<view class="header text-center padding text-xl text-bold">订单</view>
		<view class="address flex justify-between padding u-border-bottom align-center">
			<view>
				<view class="text-bold margin-right-xl text-xs">
					<view>收货</view>
					<view>地址</view>
				</view>
			</view>
			<view class="flex flex-sub align-center justify-between" @tap="handlerAddress">
				<view class="margin-left">
					<template v-if="address.addressList.length">
						<span
							class="text-bold text-lg margin-right-xs">{{showAddressObj?.name}}</span><span>{{showAddressObj?.phoneNum}}</span>
						<view>
							{{showAddressObj?.province?showAddressObj?.province:''}}{{showAddressObj?.city}}{{showAddressObj?.countries}}{{showAddressObj?.details}}
						</view>
					</template>
					<template v-else>
						添加地址
					</template>
				</view>
				<view>
					<up-icon name="arrow-right"></up-icon>
				</view>
			</view>
		</view>
		<view class="goods-item flex padding align-center align-center" v-for="(item,index) in settleList" :key="index">
			<view class="margin-right">
				<img :src="item.img" alt="poster" width="120upx" />
			</view>
			<view class="info flex justify-between align-center flex-sub">
				<view class="left">
					<view class="title text-lg text-bold margin-bottom-xs">{{item.name}}</view>
					<view class="french text-xs margin-tb-xs">{{item.french}}</view>
					<view class="singlePrice text-xs margin-tb-xs">￥{{item.price}}</view>
					<view class="spec text-xs">
						{{item.describe}}
					</view>
					<view class="price margin-top text-bold">总价 ￥{{Number(item.price)*item.buyNum}}.00</view>
				</view>
				<view class="num margin-lr-xs text-bold text-lg">x{{item.buyNum}}</view>
			</view>
		</view>
		<view class="footer">
			<button type="primary" @tap="handlerPay"
				:disabled="!Boolean(settle.totalSettlePrice)">支付{{settle.totalSettlePrice}}.00元</button>
		</view>
		<view class="model">
			<up-modal :show="show" :asyncClose="true" title="确认支付吗?" :showCancelButton="true" @cancel="handlerCancel"
				@confirm="handlerConfirm"></up-modal>
		</view>
		<view class="toast">
			<up-toast ref="uToastRef"></up-toast>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		watch,
		computed
	} from "vue"
	import useSettleStore from "../../store/settleList.js"
	import useAddressStore from "../../store/address.js"
	import {
		onLoad
	} from "@dcloudio/uni-app"
	const show = ref(false)
	const settle = useSettleStore()
	const address = useAddressStore()
	const settleList = ref(settle.goodsList)
	const uToastRef = ref(null)
	// 取消支付
	const handlerPay = function() {
		show.value = true
	}
	// 定义一个异步方法
	const asyncFun = function() {
		return new Promise((resolve, reject) => {
			let timer = setTimeout(() => {
				show.value = false
				resolve()
				clearTimeout(timer)
			}, 2000)
		})
	}
	// 确认支付
	const handlerConfirm = async function() {
		// 调用异步方法
		await asyncFun()
		uToastRef.value.show({
			type: 'success',
			message: "支付成功!",
			duration: 2000,
			iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/success.png',
			complete() {
				// 清空store中的数组
				settle.clearGoodsList()
				// 清空当前组件的数据
				settleList.value = []
			}
		})
	}
	// 取消支付
	const handlerCancel = function() {
		uToastRef.value.show({
			type: 'error',
			message: "取消支付!",
			duration: 2000,
			iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/error.png'
		})
		show.value = false
	}
	// 点击展开地址列表
	const handlerAddress = function() {
		uni.navigateTo({
			url: "/pages/address/address"
		})
	}
	// 定义一个计算属性,用来渲染当前选中的地址
	const showAddressObj = computed(() => {
		let {
			selectIndex
		} = address
		// 如果未手动选择,初次渲染时应当显示为默认地址
		if (selectIndex === -1) {
			return address.addressList.filter(item => item.isDefault)[0]
		} else {
			// 如果手动选择后,表示应当显示为手动选择的值
			return address.addressList[selectIndex]
		}
	})
	console.log(showAddressObj);
</script>

<style lang="scss">
	.root {
		padding-bottom: 80upx;

		.header {
			background-color: lightblue;
		}

		.footer {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
		}
	}

	.spec {
		color: #aaa;
		width: 85%;
	}

	.french {
		color: #666;
	}

	.price {
		color: steelblue;
	}

	.num {
		width: fit-content;
	}

	.singlePrice {
		color: #aaa
	}
</style>