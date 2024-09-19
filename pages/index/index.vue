<template>
	<view class="index-container">
		<!-- 弹出层 -->
		<navBar :show="show" @changeShow="handlerCon" :list="list" :bid="bid"></navBar>
		<view class="header">
			<header-comp @openPopup="show=true"></header-comp>
		</view>
		<view class="container">
			<item-comp v-for="(item,index) in listData" :src="item.cartImg" :title="item.name" :price="item.price"
				@addToCart="handlerCart(item)">
				<template #img>
					<img :src="item.img" alt="poster" width="100%" @tap="handlerTap(item)" />
				</template>
			</item-comp>
		</view>
		<up-toast ref="uToastRef"></up-toast>
	</view>
</template>

<script setup>
	import navBar from "../../components/navBar.vue"
	import useUserStore from "../../store/user"
	import {
		onLoad,
		onReachBottom,
		onPullDownRefresh
	} from '@dcloudio/uni-app'
	import {
		_get
	} from "../../utils/req.js"
	import {
		onMounted,
		ref
	} from "vue"
	const listData = ref([])
	const skip = ref(0)
	const search = ref('')
	const uToastRef = ref(null)
	const show = ref(false)
	const list = ref([])
	const bid = ref('')
	const userStore = useUserStore()
	const getListData = function() {
		_get(`/1.1/classes/goods?where=${search.value}&limit=8&skip=${skip.value*8}`).then(res => {
			if (res.data.results.length) {
				// console.log(res.data.results);
				listData.value = [...listData.value, ...res.data.results]
				skip.value++
			} else {
				uToastRef.value.show({
					message: "没有更多了..."
				})
				return false
			}
		})
	}
	const handlerTap = function(param) {
		uni.navigateTo({
			url: `/pages/detail/detail?sku=${param.sku}`
		})
	}
	const handlerCart = function(cart) {
		if (!userStore.isLogin) {
			uToastRef.value.show({
				message: "用户未登录",
				duration: 1000,
				complete() {
					uni.navigateTo({
						url: "/pages/login/login"
					})
				}
			})
		} else {
			console.log(cart);
			uni.navigateTo({
				url: `/pages/detail/detail?sku=${cart.sku}&target=true`
			})
		}
	}
	const handlerCon = function(val) {
		show.value = val
	}
	onLoad((payload) => {
		uni.getStorage({
			key: 'classList',
			success(res) {
				list.value = JSON.parse(res.data)
			}
		})
		// console.log(payload);
		bid.value = payload.bid
		search.value = JSON.stringify({
			bigId: payload.bid
		})
		getListData()
		// let page = getCurrentPages()
		// console.log(page[page.length - 1].route);
	})
	onReachBottom(() => {
		getListData()
	})
	onPullDownRefresh(() => {
		skip.value = 0
		listData.value = []
		getListData()
		uni.stopPullDownRefresh()
	})
</script>

<style lang="scss">
	.container {
		padding: 15upx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
</style>