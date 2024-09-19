import {
	defineStore
} from "pinia"
const useAddressStore = defineStore('address', {
	state() {
		return {
			addressList: [{
					name: "张三",
					phoneNum: "13322021154",
					isDefault: false, // 是否是默认地址
					province: "四川省",
					city: "广元市",
					countries: "苍溪县",
					details: "陵江镇江南村x组xx号",
					id: '1000'
				},
				{
					name: "李四",
					phoneNum: "13322441151",
					isDefault: false,
					province: "陕西省",
					city: "西安市",
					countries: "雁塔区",
					details: "小寨东路xx街道xx号",
					id: '1001'
				},
				{
					name: "王五",
					phoneNum: "12345678911",
					isDefault: true,
					province: "",
					city: "北京市",
					countries: "海淀区",
					details: "xxxx地区xxxx号",
					id: '1002'
				}
			],
			// 点击时选中的下标
			selectIndex: -1
		}
	},
	actions: {
		// 存放选中的列表下标
		saveSelectIndex(val) {
			this.selectIndex = val
		},
		// 更改默认地址
		changeDefaultAddress(idx) {
			for (let i = 0; i < this.addressList.length; i++) {
				if (idx === i) {
					this.addressList[idx].isDefault = true
				} else {
					this.addressList[i].isDefault = false
				}
			}
		},
		// 删除地址
		deleteAddress(idx) {
			this.addressList = this.addressList.filter((item, index) => index !== idx)
		},
		// 增加地址
		addAddress(addObj) {
			this.addressList.push(addObj)
		},
		// 更改地址
		changeAddress(idx, item) {
			// 保留原isDefault属性
			let isDefault = this.addressList[idx].isDefault
			// 更新更改标识id
			let id = Date.now()
			// 将新更改的数据覆盖掉原数据
			this.addressList[idx] = item
			// 添加isDefault与id
			this.addressList[idx].isDefault = isDefault
			this.addressList[idx].id = id
		},
		// 查找默认元素下标
		findDefaultIndex() {
			return this.addressList.findIndex(item => item.isDefault)
		}
	},
	getters: {
		
	}
})

export default useAddressStore