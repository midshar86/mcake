<template>
	<!-- 单个项目容器 -->
	<view class="container-item">
		<!-- 图片容器 -->
		<view class="img-box">
			<slot name="img"></slot>
			<!-- <img class="item-img" :src="src" alt="cake" /> -->
		</view>
		<!-- 信息容器 -->
		<view class="info">
			<view class="left-info">
				<view class="left-info-head">
					<view class="title fontsize-22">
						{{title}}
					</view>
					<view class="sign fontsize-16" v-if="sign">
						{{sign}}
					</view>
				</view>
				<view class="intro color-72 fontsize-14">
					{{french}}
				</view>
				<view class="price text-lg text-bold">
					<sub>￥</sub>{{price}}
				</view>
			</view>
			<view class="right-info">
				<view class="iconfont color-89" @tap="handlerTap">
					&#xe901;
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		defineProps,
		defineEmits
	} from 'vue'
	// defineProps(['src', 'price', 'sign', 'french', 'title'])
	defineProps(['price', 'sign', 'french', 'title'])
	const emits = defineEmits(['addToCart'])
	const handlerTap = function() {
		emits("addToCart")
	}
</script>

<style lang="scss">
	.img-box {
		width: 350upx;
		height: 350upx;
		background-color: rgb(200, 250, 255);
		display: flex;
		justify-content: center;
		align-items: center;

		.item-img {
			width: 220upx;
		}
	}

	.info {
		width: 350upx;
		display: flex;
		justify-content: space-between;
		margin: 22upx 0;

		.left-info {
			.left-info-head {
				display: flex;
				margin: 10upx 0;

				.title {
					font-weight: bold;
				}

				.sign {
					padding: 0 10upx;
					background-color: #fae456;
					margin: 0 10px;
					display: flex;
					align-items: center;
				}
			}

			.intro {
				margin-top: 14upx;
				margin-bottom: 20upx;
			}
		}

		.right-info {
			margin-top: 10upx;
			width: 60upx;
			height: 60upx;
			background-color: #fae456;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
		}
	}
</style>