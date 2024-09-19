<template>
	<view>
		<button type="primary" @tap="getClass">存入分类数据</button>
		<button type="primary" @tap="getGoodsData">存入商品数据</button>
		<button type="primary" @tap="getSwiperData">存入全屏轮播数据</button>
	</view>
</template>

<script setup>
	// 将原网站的数据转存到leanCloud平台
	import {
		_req,
		_post
	} from "../../utils/req.js"
	const getClass = async function() {
		let res = await _req("https://www.mcake.com/api/goods/category")
		let {
			data
		} = res.data
		let params = {
			requests: []
		}
		data.forEach(item => {
			params.requests.push({
				"method": "POST",
				"path": "/1.1/classes/classfiy",
				"body": item
			})
		})
		_post("/1.1/batch", params).then(info => console.log(info))
	}
	const getGoodsData = async function() {
		let res = await _req("https://www.mcake.com/api/goods/load?cityId=110&bid=5&fid=0&tid=0&page=2&count=12")
		let {
			data
		} = res.data
		let params = {
			requests: []
		}
		data.data.forEach(item => {
			params.requests.push({
				"method": "POST",
				"path": "/1.1/classes/goods",
				"body": item
			})
		})
		console.log(params);
		_post("/1.1/batch", params).then(res => console.log(res))
	}
	const getSwiperData = async function() {
		let res = await _req("https://www.mcake.com/api/page/load?cityId=110&route=pages%2Fhome&adapter=3", "GET")
		let {
			list
		} = res.data.data
		let params = {
			requests: []
		}
		list.forEach(item => {
			params.requests.push({
				"method": "POST",
				"path": "/1.1/classes/swiper",
				"body": item
			})
		})
		_post("/1.1/batch", params).then(res => console.log(res))
	}
</script>

<style>

</style>