<template>
	<up-popup class="popup" :show="show" mode="left" :closeable="true" @close="changeIsShow"
		:closeOnClickOverlay="false" :overlay="false">
		<view>
			<up-list width="750upx">
				<up-list-item v-for="item in navDataAll" :key="item?.bname">
					<up-cell :title="item.bname+' >'" @tap="handlerChange(item)">
					</up-cell>
				</up-list-item>
			</up-list>
		</view>
	</up-popup>
</template>

<script setup>
	import {
		ref,
		defineProps,
		defineEmits,
		watch
	} from "vue"
	import {
		onLoad
	} from "@dcloudio/uni-app"
	// 变量区
	const navDataBefore = ref([{
		bname: '首页',
		bid: '0'
	}])
	const navDataAfter = ref([{
		bname: '购物车',
		bid: "0"
	}, {
		bname: '全国送',
		bid: '0'
	}, {
		bname: '企业专区',
		bid: "0"
	}, {
		bname: '配送范围',
		bid: "0"
	}])
	const props = defineProps(['show', 'list', 'bid'])
	const emit = defineEmits(['changeShow'])
	const navDataAll = ref([])
	// 函数区
	const changeIsShow = function() {
		emit('changeShow', false)
	}
	const handlerChange = function(val) {
		// console.log(props.bid);
		if (props.bid === val.bid) {
			return
		}
		switch (val.bname) {
			case '首页':
				uni.navigateTo({
					url: "/pages/home/home"
				})
				break;
			case '购物车':
				uni.navigateTo({
					url: "/pages/cart/cart"
				})
				break;
			default:
				uni.navigateTo({
					url: `/pages/index/index?bid=${val.bid}`,
				})
				break;
		}
		emit('changeShow')
	}
	// 侦听器
	watch(props, () => {
		navDataAll.value = navDataBefore.value.concat(props.list, navDataAfter.value)
	}, {
		immediate: true
	})
</script>

<style lang="scss">
</style>