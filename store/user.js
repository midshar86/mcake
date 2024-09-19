import {
	defineStore
} from "pinia"
const useUserStore = defineStore("user", {
	state: () => {
		return {
			// 用户信息
			userinfo: uni.getStorageSync("userinfo")
		}
	},
	actions: {
		// 存储用户信息
		saveUserInfo(obj) {
			this.userinfo = obj
			uni.setStorage({
				key: "userinfo",
				data: obj
			})
		}
	},
	getters: {
		// 判断用户是否已经登录
		isLogin() {
			return this.userinfo?.token
		}
	}
})
export default useUserStore