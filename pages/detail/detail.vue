<template>
	<scroll-view class="root" style="flex: 1" scroll-with-animation="true">
		<!-- 返回按钮 -->
		<view class="back">
			<span @tap="handlerBack">&lt; 返回上级页面</span>
		</view>
		<!-- 在uniapp中使用轮播图时，需要自行更改swiper元素的宽度与高度，方便后续的子元素继承 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="swiper">
			<swiper-item v-for="(item,index) in detail?.banner" :key="item">
				<view class="swiper-item">
					<img :src="item" alt="introduce" />
				</view>
			</swiper-item>
		</swiper>
		<!-- 标题与价格 -->
		<view class="margin-sm text-xl text-bold">
			<span class="margin-right-sm">{{detail?.name}}</span><span>{{detail?.french}}</span>
			<view class="price margin-tb-sm">￥{{detail?.price}}</view>
		</view>
		<!-- 口味描述 -->
		<view class="introduce text-bold margin-sm">
			<span v-for="(item,index) in detail?.basic" :key="item.id" class="introduce-item" :class="{flex:index===3}">
				<span class="margin-right-sm">{{item.chinese}}</span><span
					v-if="index!==3">{{item.value}}</span><up-rate v-else :count="5" gutter="0" :modelValue="item.value"
					readonly></up-rate>
			</span>
		</view>
		<!-- 标签区 -->
		<view class="flex text-sm text-bold flex-wrap margin-top-sm">
			<span v-for="(item,index) in detail?.mater" :key="item.id" class="tag-item">
				{{item.name}}
			</span>
		</view>
		<!-- 选择框 -->
		<view class="sel-container margin-sm">
			<!-- <select name="size" id="size" class="selector">
				<option v-for="(item,index) in detail?.list" :key="item.id" :value="item.weight">
					{{item.spec}}{{item.weight}}
				</option>
			</select> -->
			<up-dropdown class="sel">
				<up-dropdown-item :options="opt" class="sel-item" :title="selectVal"
					@change="handlerChange"></up-dropdown-item>
			</up-dropdown>
			<up-dropdown class="sel">
				<up-dropdown-item :options="situationVal" class="sel-item" :title="selectVal2"
					@change="handlerChange2"></up-dropdown-item>
			</up-dropdown>
			<up-number-box class="margin-left" v-model="buyNum" @change="valChange" buttonSize="20"
				bgColor="lightblue"></up-number-box>
		</view>
		<view>
			<view class="margin-sm text-xs text-bold">已选：{{choose}}</view>
		</view>
		<!-- 按钮区 -->
		<view class="btns">
			<up-button class="btn" text="立即结算" color="#001111" @tap="handlerBuy(selectSpec?.[0],buyNum)"></up-button>
			<up-button class="btn" text="加入购物袋" @tap="handlerToCart"></up-button>
		</view>
		<!-- 图片说明区 -->
		<view class="picinfo">
			<img v-for="(item,index) in detail?.pcImg" :key="item" :src="item" alt="图片详情" />
		</view>
		<up-toast ref="uToastRef"></up-toast>
	</scroll-view>
</template>

<script setup>
	import useUserStore from "../../store/user"
	import useCartStore from "../../store/cart.js"
	import useSettleStore from "../../store/settleList"
	import {
		onLoad,
		onReady
	} from "@dcloudio/uni-app"
	import {
		ref,
		computed,
		watch,
		onMounted,
		getCurrentInstance,
		nextTick
	} from "vue"
	// 定义下拉选框标题
	const selectVal = ref('选择尺寸')
	const selectVal2 = ref('选择场景')
	const pageInstance = getCurrentInstance()
	// 已选择商品规格
	const choose = ref("")
	const user = useUserStore()
	const cart = useCartStore()
	const settle = useSettleStore()
	const uToastRef = ref(null)
	const selectSpec = ref("")
	const buyNum = ref(1)
	const opt = ref([])
	// 场景下来列表数据
	const situationVal = ref([{
		label: "生日快乐",
		value: "生日快乐"
	}, {
		label: "永远幸福",
		value: "永远幸福"
	}, {
		label: "开开心心",
		value: "开开心心"
	}, {
		label: "快快乐乐",
		value: "快快乐乐"
	}, {
		label: "Happy Birthday",
		value: "Happy Birthday"
	}, {
		label: "自定义",
		value: "自定义"
	}])
	// 商品详情信息
	const detail = ref(null)
	const target = ref("")

	onLoad((payload) => {
		// 页面加载后发送请求获取商品详情数据
		uni.request({
			url: `https://www.mcake.com/api/goods/detail?cityId=110&warehouse_id=0&id=0&sku=${payload.sku}&show=0`,
			success(res) {
				detail.value = res.data.data
				// console.log(detail.value);
				detail.value.list?.forEach(item => {
					opt.value.push({
						label: item.spec + " " + item.weight,
						value: item.spec + " " + item.weight
					})
				})
			},
			fail(err) {
				console.log(err);
			}
		})
		target.value = payload.target
	})
	onMounted(() => {
		// 设置定时器,当页面渲染完成后将页面滚动到指定位置
		let timer = setTimeout(() => {
			if (target.value) {
				uni.pageScrollTo({
					scrollTop: 500,
					duration: 400
				})
			}
			// 清除定时器
			clearTimeout(timer)
		}, 400)
	})
	const handlerChange = function(val) {
		selectVal.value = val
	}
	const handlerChange2 = function(val) {
		selectVal2.value = val
	}
	const handlerBack = function() {
		uni.navigateBack()
	}
	// 当用户未登录时执行的操作
	const isNotLogin = function() {
		uToastRef.value.show({
			message: "未登录!即将跳转至登录页面...",
			duration: 1000,
			complete() {
				uni.navigateTo({
					url: "/pages/login/login"
				})
			}
		})
	}
	// 加入购物车
	const handlerToCart = function() {
		// 用户未登录,跳转至登录页面
		if (!user.isLogin) {
			isNotLogin()
		} else if (!selectSpec.value) {
			uToastRef.value.show({
				message: "请选择商品规格",
				duration: 1000
			})
		} else {
			// 加入购物车
			cart.addToCart(detail.value, selectSpec.value, buyNum.value)
			uToastRef.value.show({
				message: "加入购物车成功!",
				duration: 800
			})
		}
	}
	// 用户结算
	const handlerBuy = function(info, num) {
		// 用户未登录,跳转至登录页面
		if (!user.isLogin) {
			isNotLogin()
		} else if (!selectSpec.value) {
			uToastRef.value.show({
				message: "请选择商品规格",
				duration: 1000
			})
		} else {
			// 存放需要结算的商品数据:图片,名称,法语名称,单价,描述,购买数量
			let settleGoodsInfo = {
				img: info.img,
				name: info.name,
				price: info.price,
				describe: info.describe,
				buyNum: num
			}
			settle.addSettleList([settleGoodsInfo])
			console.log(settle.$state.goodsList);
			// 跳转至结算页面
			uni.navigateTo({
				url: "/pages/settleAccounts/settleAccounts"
			})
		}
	}
	const valChange = function() {}
	// 当用户选择尺寸改变后,显示具体信息
	watch(selectVal, () => {
		selectSpec.value = detail.value?.list?.filter(item => selectVal.value === item.spec + " " + item.weight)
		choose.value = selectSpec.value?.[0].describe
	}, {
		immediate: true
	})
</script>

<style lang="scss">
	.root {
		font-family: 'Times New Roman', Times, serif;

		.swiper {
			height: 750upx;

			img {
				width: 100vw;
			}
		}

		.introduce {
			width: 100%;
			height: 80upx;
			display: flex;
			align-content: center;
			justify-content: space-around;
			flex-wrap: wrap;
			font-size: 18upx;


			.introduce-item {
				width: 50%;
				line-height: 40upx;
				letter-spacing: -1upx;

				&:nth-child(even) {
					position: relative;
					left: -20upx;
				}
			}
		}

		.tag-item {
			width: fit-content;
			background-color: lightsteelblue;
			border: 1px solid #eee;
			margin: 0 10upx;
			border-radius: 10upx;
			padding: 5upx 5upx;
		}

		.selector {
			border: 1px solid #eee;
			height: 40upx;
		}

		.sel-container {
			display: flex;
			justify-content: flex-start;
		}

		:deep(.u-dropdown) {
			width: 200upx;
			flex: 0;

			.u-dropdown__menu {
				width: 200upx;
			}

			.u-flex-row {
				width: fit-content;
				display: flex;
				text-indent: 15upx;
				justify-content: space-between;
				padding: 6upx;
				border: 1px solid black;

				span {
					font-size: 18upx;
				}
			}

			.u-cell__body {
				height: 40upx;

				.u-cell__title-text {
					font-size: 16upx;
				}
			}
		}

		.btns {
			margin: 10upx 20upx;

			.btn {
				width: 100%;
				margin: 10upx 0;
				border: 1px outset black;
			}
		}

		.picinfo {
			margin: 0 20upx;

			img {
				display: block;
				width: 100%;
			}
		}

		:deep(.u-dropdown__content) {
			height: fit-content;
			overflow: auto;

			.u-dropdown__content__mask {
				display: none;
			}
		}

		.back {
			position: fixed;
			left: 20upx;
			top: 20upx;
			z-index: 999;
			font-size: 30upx;
			color: #fff;
		}
	}
</style>