import {
	defineStore
} from "pinia"
const useSettleStore = defineStore('settleList', {
	state() {
		return {
			// 存放结算商品信息
			goodsList: []
		}
	},
	actions: {
		// 详情页面结算
		addSettleList(info) { // 参数info是个数组
			this.clearGoodsList()
			// 遍历数组元素放入结算数组中
			info.forEach(item => {
				this.goodsList.push(item)
			})
		},
		// 清除结算商品数据
		clearGoodsList() {
			this.goodsList = []
		}
	},
	getters: {
		// 计算计算总价
		totalSettlePrice() {
			return this.goodsList.reduce((acc, item) => acc += Number(item.price) * item.buyNum, 0)
		}
	}
})
export default useSettleStore