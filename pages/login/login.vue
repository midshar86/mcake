<template>
	<view>
		<view class="form margin-tb-xl">
			<view class="title margin-tb-sm">
				<view class="text-bold">登录</view>
			</view>
			<view class="box">
				<input type="text" v-model="user.username" placeholder="用户名" />
				<input type="password" v-model="user.password" placeholder="用户密码" class="margin-tb-sm" />
			</view>
			<view class="btns">
				<up-button text="点击登录" @tap="handlerLogin"></up-button>
			</view>
			<view class="text-sm margin-tb-sm">没有账号?<span class="toRegister" @tap="goToRegister">点击注册</span></view>
		</view>
		<ul class="list">
			<view>登录MCAKE账户您将获得以下权利</view>
			<li>使用已保存的资料,享受快速结账</li>
			<li>全程跟踪您的订单信息</li>
			<li>管理个人资料及口味偏好</li>
			<li>享受积分,卡券等结算优惠</li>
		</ul>
		<up-toast ref="uToastRef"></up-toast>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue"
	import {
		_post
	} from "../../utils/req.js"
	import useUserStore from "../../store/user.js"
	const userStore = useUserStore()
	const user = ref({
		username: "",
		password: ""
	})
	const uToastRef = ref(null)
	const goToRegister = function() {
		uni.navigateTo({
			url: "/pages/register/register"
		})
	}
	const handlerLogin = async function() {
		let res = await _post("/1.1/login", user.value)
		// console.log(res);
		if (res.statusCode === 200) {
			uToastRef.value.show({
				message: "登录成功!",
				duration: 1000,
				complete() {
					uni.navigateTo({
						url: "/pages/home/home"
					})
				}
			})
			// 登录成功,存储用户数据到pinia与本地
			let obj = {
				username: res.data.username,
				token: res.data.sessionToken
			}
			userStore.saveUserInfo(obj)
		} else {
			uToastRef.value.show({
				message: res.data.code === 210 ? "用户密码错误!" : "用户不存在!",
				duration: 1000
			})
		}
	}
</script>

<style lang="scss">
	page {
		padding: 20upx;
	}

	.box {
		input {
			text-indent: 10upx;
			height: 80upx;
			line-height: 80upx;
			width: 100%;
			border-bottom: 1px solid #aaa;
			background-color: #eee;
		}
	}

	.btns {
		.u-button {
			background-color: #666;
			color: #fff;
		}
	}

	.list {
		list-style-position: inside;
		padding-left: 0;
		line-height: 50upx;
		font-size: 24upx;
	}

	.to-register {
		span {
			color: red;
			border-bottom: 1px solid red;
		}
	}

	.toRegister {
		color: orangered;
		border-bottom: 1px solid orangered;
	}

	::placeholder {
		color: #aaa;
	}
</style>