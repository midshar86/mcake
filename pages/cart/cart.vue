<template>
	<view class="root" @tap="listShow=false">
		<view class="header flex">
			<up-icon name="arrow-left" @tap="handlerBack"></up-icon><span>购物车</span>
		</view>
		<view class="flex padding align-center" v-for="(item,index) in cartList" :key="`${item.id}-${item.goodsId}`">
			<!-- 左侧勾选框 -->
			<up-icon name="checkmark-circle-fill" :class="['margin-right',{'check':item.isCheck}]"
				@tap="handlerCheck(index)"></up-icon>
			<!-- 商品信息展示 -->
			<view class="right flex flex-sub">
				<!-- 缩略图 -->
				<img :src="item.img" alt="" width="100upx" class="margin-right" />
				<view class="info flex align-center">
					<!-- 商品简要描述 -->
					<view class="info-lf margin-right">
						<view class="text-bold margin-bottom-xs">{{item.name}}</view>
						<view class="text-xs">{{item.french}}</view>
						<view class="margin-top text-bold">
							￥{{cartList[index].buyNum*Number(cartList[index].list[cartList[index].subListIdx].price)}}
						</view>
					</view>
					<!-- 编辑按钮 -->
					<view class="flex flex-sub flex-direction align-end">
						<up-icon name="edit-pen" class="edit flex-sub justify-end" @tap="handlerTap(index)"></up-icon>
						<text class="text-right">
							{{cartList[index].list[cartList[index].subListIdx].spec}} x {{cartList[index].buyNum}}
						</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 商品页脚 -->
		<view class="footer flex justify-between align-center">
			<view class="left flex margin-left">
				<view class="flex margin-right">
					<up-icon name="checkmark-circle-fill" :class="['margin-right-xs',{'check':cart.checkAll}]"
						@tap="handlerCheckAll"></up-icon><text>全选</text>
				</view>
				<view>共计:{{totalPrice}}元</view>
			</view>
			<view class="paycard right" @tap="goToSettleAccount">
				立即结算
			</view>
		</view>
		<!-- 商品详情模态框 -->
		<view>
			<up-modal :show="show" :showConfirmButton="false" :closeOnClickOverlay="true" @close="handlerClose"
				class="model" width="80vw">
				<view class="padding">
					<view class="flex">
						<img src="../../static/mcake-logo.png" alt="poster" width="80upx" class="margin-right" />
						<view>
							<view class="text-bold margin-bottom-xs">{{cartList[cartListOpenIndex].name}}</view>
							<view class="text-xs">{{cartList[cartListOpenIndex].french}}</view>
							<view class="margin-top-xs text-bold">
								￥{{modelNum*Number(cartList[cartListOpenIndex].list[listSelectIndex].price)}}
							</view>
						</view>
					</view>
					<view class="flex justify-between margin-tb">
						<view>规格选择</view>
						<view class="list flex" @tap="handlerOpenList">
							<!-- 默认值 -->
							<text>
								{{cartList[cartListOpenIndex].list[listSelectIndex].spec}} -
								{{cartList[cartListOpenIndex].list[listSelectIndex].edible}}
							</text>
							<up-icon name="arrow-down"></up-icon>
							<view class="listitems" v-if="listShow">
								<view v-for="(item,idx) in cartList[cartListOpenIndex].list" :key="item.id"
									@tap.stop="handlerCloseList(idx)">
									{{item.spec}} - {{item.edible}}
								</view>
							</view>
						</view>
					</view>
					<view class="flex justify-between">
						<view>数量选择</view>
						<up-number-box class="btn-item" iconStyle="backgroundColor:orange"
							:modelValue="cartList[cartListOpenIndex].buyNum" @change="handlerChange"></up-number-box>
					</view>
				</view>
				<view class="btns flex">
					<button @tap="show=false">取消</button><button @tap="handlerConfirm">确定</button>
				</view>
			</up-modal>
		</view>
		<!-- 组件拦截模态框 -->
		<view class="intercepter">
			<up-modal :show="showInter" title="温馨提示" :showCancelButton="true" contentTextAlign="center" confirmText="登录"
				@confirm="goToLogin" @cancel="backToLast">
				<text class="margin-tb text-center text-lg">用户未登录!请登录后再试!</text>
			</up-modal>
		</view>
		<view class="toast">
			<up-toast ref="uToastRef"></up-toast>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		computed
	} from "vue"
	import {
		onLoad
	} from "@dcloudio/uni-app"
	import useCartStore from "../../store/cart.js"
	import useUserStore from "../../store/user.js"
	import useSettleStore from "../../store/settleList.js"
	const cart = useCartStore()
	const user = useUserStore()
	const settle = useSettleStore()
	const cartList = ref(cart.cartData)
	const show = ref(false)
	const listShow = ref(false)
	const checkAll = ref(false)
	const uToastRef = ref(null)
	const showInter = ref(false) // 控制拦截模态框显示
	// 存储点击的购物车元素索引
	const cartListOpenIndex = ref("")
	const listSelectIndex = ref(0)
	// 存放单个商品模态框中选择的数量
	const modelNum = ref('')
	const handlerBack = function() {
		uni.navigateBack()
	}
	// 点击编辑按钮打开模态框,更改全局访问下标
	const handlerTap = function(idx) {
		cartListOpenIndex.value = idx
		// 更改默认显示的商品规格为已选中的商品规格
		listSelectIndex.value = cartList.value[cartListOpenIndex.value].subListIdx
		show.value = true
		modelNum.value = cartList.value[cartListOpenIndex.value].buyNum
	}
	// 点击打开规格选择列表,再次点击可以关闭
	const handlerOpenList = function() {
		listShow.value = !listShow.value
	}
	// 选择规则后关闭列表,同时重新渲染选择的规格
	const handlerCloseList = function(idx) {
		listSelectIndex.value = idx
		// cart.changeSpec(cartListOpenIndex.value, idx)
		listShow.value = false
	}
	// 关闭模态框后,更改全局访问下标
	const handlerClose = function() {
		show.value = false
	}
	// 点击确认按钮时触发的事件函数
	const handlerConfirm = function() {
		// 将选择的单个商品数量进行修改
		cart.addBuyNum(cartListOpenIndex.value, modelNum.value)
		// 保存选择的规格下标
		cart.changeSpec(cartListOpenIndex.value, listSelectIndex.value)
		// 设置定时器稍后执行,将选择规格重置,为下一次选择作准备
		let timer = setTimeout(() => {
			// 点击确认按钮时,将选择的规格置为初值
			listSelectIndex.value = 0
			clearTimeout(timer)
		}, 400)
		// 关闭弹窗
		show.value = false
	}
	// 更改商品选中状态
	const handlerCheck = function(index) {
		cart.changeCheckState(index)
	}
	// 根据全选按钮更改单项商品的选中状态
	const handlerCheckAll = function() {
		checkAll.value = cart.checkAll
		cart.changeEveryCheckState(!checkAll.value)
	}
	// 点击步进器时存放当前商品的数量
	const handlerChange = function(obj) {
		// 点击步进器时, 更改商品数量
		modelNum.value = obj.value
	}
	// 计算结算金额
	const totalPrice = computed(() => {
		let total = 0
		cartList.value.forEach(item => {
			if (item.isCheck) {
				total += item.buyNum * Number(item.list[item.subListIdx].price)
			}
		})
		return total
	})
	// 跳转至登录页面
	const goToLogin = function() {
		uni.navigateTo({
			url: "/pages/login/login"
		})
	}
	// 返回上一页
	const backToLast = function() {
		uni.navigateBack()
	}
	// 点击立即结算按钮,跳转至结算页面
	const goToSettleAccount = function() {
		// 点击结算时,筛选当前勾选的商品
		let settleGoods = cartList.value.filter(item => item.isCheck)
		// 再次筛选结算商品规格
		let againSelectGoods = []
		settleGoods.forEach(item => {
			againSelectGoods.push({
				...item.list[item.subListIdx],
				buyNum: item.buyNum
			})
		})
		console.log(againSelectGoods);
		// 将筛选后的商品添加到store存储
		settle.addSettleList(againSelectGoods)
		// 如果用户没有勾选任何商品,点击结算时显示提示信息
		if (!againSelectGoods.length) {
			uToastRef.value.show({
				message: "未选择结算商品!",
				duration: 2000,
				type: "error",
				iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/error.png'
			})
		} else {
			// 用户选择商品后,跳转至结算页面
			uni.navigateTo({
				url: "/pages/settleAccounts/settleAccounts"
			})
		}
	}
	onLoad(() => {
		// 如果用户未登录,展示模态框
		if (!user.isLogin) {
			showInter.value = true
		}
		// 如果用户已登录,模态框关闭,展示购物车

	})
</script>

<style lang="scss">
	.root {
		padding-bottom: 100upx;
	}

	.header {
		line-height: 80upx;
		padding: 0 20upx;
		background-color: #ddd;

		span {
			font-size: 30upx;
			font-weight: bold;

			&:last-child {
				flex: 1;
				text-align: center;
			}
		}
	}

	.check {
		span {
			font-size: 40upx;
		}
	}

	.info {
		flex: 1;

		.edit {
			:deep(.u-icon__icon) {
				width: 80upx;
				height: 80upx;
				background-color: #eee;
				font-size: 50upx;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}

	.info-lf {
		align-self: flex-start;
		margin-top: 20upx;
	}

	.footer {
		width: 100%;
		height: 100upx;
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: skyblue;
		box-shadow: 0 0 5upx 5upx #ccc;
	}

	.paycard {
		background-color: orange;
		line-height: 100upx;
		width: 150upx;
		height: 100%;
		text-align: center;
		color: #fff;
	}

	// 设置选项是否被勾选
	:deep(.check) {
		.u-icon__icon {
			color: orange !important;
		}
	}

	:deep(.u-modal__content) {
		flex-direction: column !important;
		padding: 0 !important;
	}

	:deep(.u-line) {
		border: none !important;
	}

	.btns {
		button {
			height: 80upx;
			line-height: 80upx;
			flex: 1;
			font-size: 30upx;
			border-radius: 0;

			&:last-child {
				background-color: steelblue;
			}

			&:first-child {
				background-color: powderblue;
			}
		}
	}

	.list {
		position: relative;

		.listitems {
			width: 280upx;
			position: absolute;
			top: 50upx;
			right: 0;
			z-index: 100;
			background-color: aliceblue;

			view {
				height: 50upx;
				line-height: 50upx;
				text-align: center;
			}
		}
	}

	:deep(.u-popup__content) {
		overflow: visible !important;

		.u-modal {
			overflow: visible;
		}
	}

	:deep(.btn-item) {
		span {
			width: 35px;
			height: 30px;
			background-color: lightsteelblue;
			text-align: center;
			line-height: 35px;
		}
	}
</style>