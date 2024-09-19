<template>
	<view class="header flex justify-between align-center margin">
		<!-- 左部导航区域 -->
		<view class="header-left">
			<span class="iconfont icon-map-pin--line margin-right-sm"></span>
			<span>四川</span>
		</view>
		<view class="header-center">
			<view class="text-bold">MCAKE</view>
		</view>
		<view class="header-right">
			<span class="iconfont icon-search-line"></span>
			<span class="text text-center">|</span>
			<span class="iconfont icon-menu-fill" @tap="openPopup"></span>
		</view>
	</view>
</template>

<script setup>
	import {
		defineEmits
	} from 'vue'
	const emit = defineEmits(['openPopup'])
	const openPopup = function() {
		emit('openPopup')
	}
</script>

<style lang="scss">
	.header {
		color: #777;
		font-size: 30upx;

		.header-right {
			display: flex;
			align-items: center;

			.text {
				display: inline-block;
				margin: 0 15upx;
				color: #ccc;
			}
		}
	}
</style>