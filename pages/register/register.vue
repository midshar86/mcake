<template>
	<view>
		<view class="form margin-tb-xl">
			<view class="title margin-tb-sm">
				<view class="text-bold">注册</view>
			</view>
			<view class="box">
				<input type="text" v-model="user.username" placeholder="用户名" />
				<input type="password" v-model="user.password" placeholder="用户密码" class="margin-tb-sm" />
			</view>
			<view class="btns">
				<up-button text="点击注册" @tap="handlerRegister"></up-button>
			</view>
			<view class="text-sm margin-tb-sm">已有账号?<span class="toLogin" @tap="goToLogin">去登陆</span></view>
		</view>
		<ul class="list">
			<view>注册MCAKE账户您将获得以下权利</view>
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
	const uToastRef = ref(null)
	const user = ref({
		username: "",
		password: ""
	})
	const handlerRegister = async function() {
		if (!user.value.username || !user.value.password) {
			uToastRef.value.show({
				message: "用户名或密码不能为空！",
				duration: 1000
			})
			return
		}
		// 前端正则表达式验证用户名密码规则
		let regUsername = /^[a-z][\d|\w]{5,}/i
		let regPsw1 = /[a-z]/
		let regPsw2 = /[A-Z]/
		let regPsw3 = /\d/
		if (!regUsername.test(user.value.username)) {
			uToastRef.value.show({
				message: "用户名必须以字母开头,并且不能少于6位数!",
				duration: 1000
			})
			return
		}
		let {
			password
		} = user.value
		if (regPsw1.test(password) && regPsw2.test(password) && regPsw3.test(password) && password.length >= 6) {
			let res = await _post("/1.1/users", user.value)
			console.log(res);
			// 首次注册
			if (res.statusCode === 201) {
				uToastRef.value.show({
					message: "注册成功!即将跳转至登录页面...",
					duration: 1000,
					complete() {
						uni.navigateTo({
							url: "/pages/login/login"
						})
					}
				})
			}
			// 重复注册
			if (res.statusCode === 400) {
				uToastRef.value.show({
					message: "用户已注册!",
					duration: 1000
				})
			}
		} else {
			uToastRef.value.show({
				message: "用户名密码必须包含大小写字母和数字，并且不少于6位数!",
				duration: 1000
			})
			return
		}
	}
	const goToLogin = function() {
		uni.navigateTo({
			url: "/pages/login/login"
		})
	}
</script>

<style lang="scss">
	page {
		padding: 20upx;

		.form {
			.title {
				view {
					&:nth-child(2) {
						color: #999;
					}
				}
			}
		}
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

	::placeholder {
		color: #aaa;
	}

	.toLogin {
		color: orangered;
		border-bottom: 1px solid orangered;
	}
</style>