<template>
	<view class="separator-bar-container flex justify-between align-center padding">
		<view class="left-bar flex align-center">
			<span class="iconfont margin-right">&#xe6af;</span>
			<view>
				<view class="text-lg">{{text}}</view>
				<view class="text-xs margin-top-xs">{{french}}</view>
			</view>
		</view>
		<view class="right-bar">
			{{computedFrench}}
		</view>
	</view>
</template>

<script setup>
	import {
		defineProps,
		computed
	} from 'vue'
	import {
		onLoad
	} from "@dcloudio/uni-app"
	let props = defineProps(['text', 'french'])
	let computedFrench = computed(() => {
		return props.french?.split(" ")[0]
	})
</script>

<style lang="scss">
	.separator-bar-container {
		height: 200upx;
		color: black;
		background-color: powderblue;

		.iconfont {
			font-size: 60upx;
			color: skyblue;
		}
	}
</style>