<template>
	<view class="root">
		<web-view :src="url"></web-view>
	</view>
</template>

<script setup>
	import {
		onLoad
	} from "@dcloudio/uni-app"
	import {
		ref
	} from "vue"
	const url = ref('')
	onLoad((info) => {
		url.value = "https://www.mcake.com/#" + info.path
	})
</script>

<style lang="scss">
	.root {
		height: 100vh;
		background-color: #fff;
	}
</style>