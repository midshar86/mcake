<template>
	<!-- 弹出层 -->
	<navBar :show="show" @changeShow="handlerChange" :list="allClassfiy.results"></navBar>
	<scroll-view @scroll="handlerScroll" scroll-y="true" class="scroll-container-top" :scroll-into-view="scrollTo"
		scroll-with-animation>
		<view id="top"></view>
		<view class="home-container">
			<!-- 首页头部区域 -->
			<header-comp @openPopup="show=true"></header-comp>
			<!-- 轮播图区域 -->
			<view class="home-swiper">
				<swiper :indicator-dots="true" indicator-active-color="#fae456" :autoplay="true" :circular="true"
					:interval="2000">
					<swiper-item v-for="(item,index) in swiperList" :key="item.url" class="swiper-item">
						<view class="swiper-item-inner">
							<img :src="item.img" alt="poster" @tap="handlerPoster(item)" />
						</view>
					</swiper-item>
				</swiper>
			</view>
			<!-- 分隔栏 -->
			<!-- <separator-bar-comp></separator-bar-comp> -->
			<!-- 滑动栏 -->
			<!-- <view>
				<scroll-view scroll-x="true" class="scroll-container">
					<img src="../../static/mcake-logo.png" alt="" width="200upx" />
					<img src="../../static/mcake-logo.png" alt="" width="400upx" />
					<img src="../../static/mcake-logo.png" alt="" width="300upx" />
				</scroll-view>
			</view> -->
			<!-- 分隔栏 -->
			<separator-bar-comp text="蛋糕精选" :french="allCakeClasses.data?.content.subtitle"></separator-bar-comp>
			<!-- 商品列表区域 -->
			<view class="flex justify-between flex-wrap goods">
				<item-comp v-for="(item,index) in cakeList" :key="item.url" :title="item.title" :price="item.price"
					:french="item.french" sign="推荐" @addToCart="handlerCart(item)">
					<template #img>
						<img :src="item.img" alt="poster" class="poster-item" @tap="handlerDetail(item)" />
					</template>
				</item-comp>
			</view>
			<!-- 分隔栏 -->
			<separator-bar-comp text="小吃精选" :french="allFoodClasses.data?.content.subtitle"></separator-bar-comp>
			<!-- 商品列表区域 -->
			<view class="flex justify-between flex-wrap goods">
				<item-comp v-for="(item,index) in foodList" :key="item.url" :title="item.title" :price="item.price"
					:french="item.french" sign="推荐" @addToCart="handlerCart(item)">
					<template #img>
						<img :src="item.img" alt="poster" class="poster-item" @tap="handlerDetail(item)" />
					</template>
				</item-comp>
			</view>
			<!-- 分隔栏 -->
			<separator-bar-comp text="限时活动" :french="allRecomClasses.subtitle"></separator-bar-comp>
			<!-- 商品列表区域 -->
			<view class="activity">
				<img :src="allRecomClasses.adv?.[0]?.img" alt="activity" width="100%" />
			</view>
			<!-- 返回顶部小图标 -->
			<view v-show="isShow" class="text-xxl top" @tap="handlerTap">
				🔝
			</view>
			<up-toast ref="uToastRef"></up-toast>
		</view>
	</scroll-view>
</template>

<script setup>
	// 外部文件区
	import {
		_get
	} from "../../utils/req.js"
	import {
		ref
	} from "vue"
	import {
		onLoad
	} from "@dcloudio/uni-app"
	import navBar from "../../components/navBar.vue"
	import useUserStore from "../../store/user.js"
	// 内部变量区
	const isShow = ref(false)
	const scrollTo = ref('')
	const swiperList = ref([])
	const cakeList = ref([])
	const foodList = ref([])
	const recommendList = ref([])
	const allCakeClasses = ref('')
	const allFoodClasses = ref('')
	const allRecomClasses = ref('')
	const allClassfiy = ref('')
	const show = ref(false)
	const user = useUserStore()
	const uToastRef = ref(null)
	// 内部函数区
	const handlerScroll = function(e) {
		let {
			scrollTop
		} = e.detail
		if (scrollTop > 500) {
			isShow.value = true
		} else {
			isShow.value = false
			scrollTo.value = ""
		}
	}
	const handlerTap = function() {
		scrollTo.value = "top"
	}
	const handlerDetail = function(item) {
		uni.navigateTo({
			url: `/pages/detail/detail?sku=${item.sku}`
		})
	}
	const handlerPoster = function(info) {
		uni.navigateTo({
			url: `../posterPage/posterPage?path=${info.url}`
		})
	}
	const handlerCart = function(detail) {
		// 无法获取token数据表示用户未登录
		if (!user.isLogin) {
			uToastRef.value.show({
				message: "未登录,即将跳转至登录页面...",
				duration: 1000,
				complete() {
					uni.navigateTo({
						url: "/pages/login/login"
					})
				}
			})
		} else {
			// 否则用户已经登录,添加至购物车,打开商品详情页
			// console.log(detail);
			uni.navigateTo({
				url: `/pages/detail/detail?sku=${detail.sku}&target=true`
			})
		}
	}
	const handlerChange = function(val) {
		show.value = val
	}
	// 生命周期区
	onLoad(() => {
		_get("/1.1/classes/swiper/66dd037acf05a13cc54ba540")
			.then(res => {
				swiperList.value = res.data.data.content.list
			})

		_get("/1.1/classes/swiper/66dd037acf05a13cc54ba541")
			.then(res => {
				cakeList.value = res.data.data.content.list
				allCakeClasses.value = res.data
			})
		_get("/1.1/classes/swiper/66dd037acf05a13cc54ba542")
			.then(res => {
				foodList.value = res.data.data.content.list
				allFoodClasses.value = res.data
			})
		_get("/1.1/classes/swiper/66dd037acf05a13cc54ba544")
			.then(res => {
				allRecomClasses.value = res.data.data.content
			})
		_get('/1.1/classes/classfiy')
			.then(res => {
				allClassfiy.value = res.data
				uni.setStorage({
					key: 'classList',
					data: JSON.stringify(allClassfiy.value.results)
				})
			})
	})
</script>

<style lang="scss">
	.scroll-container-top {
		height: 100vh;
	}

	.home-container {

		swiper {
			height: 90vh;

			.swiper-item {
				height: 90vh;

				.swiper-item-inner {
					height: 100%;

					img {
						width: 100%;
						height: 100%;
					}
				}
			}

		}

		.scroll-container {
			white-space: nowrap;

			img {
				height: 150upx;
			}
		}

		.goods {
			padding: 15upx;
		}
	}

	.top {
		border: 1px solid #aaa;
		width: 80upx;
		height: 80upx;
		line-height: 80upx;
		text-align: center;
		border-radius: 50%;
		box-shadow: 0 0 20upx #aaa;
		position: fixed;
		right: 50upx;
		bottom: 150upx;
		background-color: #fff;
	}

	.activity {
		width: 100%;
	}

	.poster-item {
		width: 100%;
	}
</style>