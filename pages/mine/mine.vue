<template>
	<view class="container">
		<!-- 顶部灰色背景 -->
		<view class="pad"></view>
		<view class="main">
			<!-- 头像 -->
			<view class="avator flex justify-center">
				<img src="../../static/mcake-logo.png" alt="avator" class="avator" />
			</view>
			<!-- 用户名 -->
			<view class="username text-center text-xxl margin-xs">
				admin
			</view>
			<view class="change-user flex justify-center align-center">
				<view class="iconfont icon-exchange-line"></view>
				<view>
					切换账号
				</view>
			</view>
			<!-- 宫格区域 -->
			<view class="grid-container flex-wrap flex margin-top-xl margin-bottom-xl justify-center">
				<view v-for="(item,index) in gridData" :key="item.text" class="grid-item flex">
					<text :class="['iconfont',item.iconfont]"></text>
					<text>{{item.text}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue"
	const gridData = ref([{
		iconfont: "icon-file-list--fill",
		text: "我的订单"
	}, {
		iconfont: "icon-wallet--fill",
		text: "待付款"
	}, {
		iconfont: "icon-shopping-bag--fill",
		text: "待收货"
	}, {
		iconfont: "icon-vip-crown-fill",
		text: "会员等级"
	}, {
		iconfont: "icon-stack-fill",
		text: "积分"
	}, {
		iconfont: "icon-money-cny-box-fill",
		text: "余额"
	}, {
		iconfont: "icon-red-packet-fill",
		text: "红包"
	}, {
		iconfont: "icon-bank-card--fill",
		text: "现金卡"
	}])
</script>

<style lang="scss">
	.pad {
		height: 400upx;
		background-color: #99dddd;
	}

	.main {
		background-color: lightcyan;
		margin: 0 20upx;
		margin-top: -200upx;

		.avator {
			img {
				width: 200upx;
				height: 200upx;
				border-radius: 50%;
				margin-top: -100upx;
			}
		}

		.change-user {
			color: #888;

			view {
				margin: 0 5upx;
			}
		}

		.grid-container {
			.grid-item {
				width: 170upx;
				height: 170upx;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				border: 1px solid #ddd;

				.iconfont {
					font-size: 50upx;
					color: #aaa;
					margin: 10upx 0;
				}
			}
		}
	}
</style>