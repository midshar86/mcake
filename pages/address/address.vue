<template>
	<view>
		<!-- 单项地址项目 -->
		<view class="address-item padding-lr padding-top u-border margin-xs" v-for="(item,index) in addressList"
			:key="item.id" :class="{'default':item.isDefault}">
			<!-- 默认选中样式 -->
			<view class="tag">默</view>
			<!-- 地址详情 -->
			<view class="flex justify-between align-center">
				<view class="icon margin-right">
					<up-icon name="checkmark-circle-fill" :class="['icon-item',{'focus':isActiveIndex===index}]"
						@tap="handlerCheck(index)"></up-icon>
				</view>
				<view class="flex justify-between align-center flex-sub">
					<view>
						<view class="margin-bottom-xs">
							<span
								class="text-xl text-bold margin-right">{{item.name}}</span><span>{{item.phoneNum}}</span>
						</view>
						<view class="detail">
							{{item.province?item.province:''}}{{item.city}}{{item.countries}}{{item.details}}
						</view>
					</view>
					<view class="edit">
						<up-icon name="edit-pen-fill" size="28" class="flex align-center justify-center"
							@tap="editAddress(index)"></up-icon>
					</view>
				</view>
			</view>
			<view class="flex justify-around margin-tb-xs">
				<view @tap="handlerDefault(index)">
					{{item.isDefault?'默认地址':'设为默认'}}
				</view><up-line direction="col" length="40upx" color="#888"></up-line>
				<view @tap="handlerDelete(index)">删除地址</view>
			</view>
		</view>
		<!-- 新增地址按钮 -->
		<view class="flex justify-center align-center add-con margin-top">
			<view class="add-btn flex flex-direction align-center" @tap="handlerAddAddress">
				<up-icon name="plus-circle-fill" class="add-icon" color="#aaa"></up-icon>
				<view class="text margin-top text-center">新增地址</view>
			</view>
		</view>
		<!-- 输入地址的模态框 -->
		<view class="model">
			<up-modal :show="show" title="输入地址信息" :showCancelButton="true" @confirm="handlerConfirm"
				@cancel="handlerCancel">
				<view>
					<view class="flex margin-top align-center justify-between">
						<label for="username" class="flex margin-right-xs">
							<span class="text">姓名:</span>
							<input type="text" id="username" v-model="user.username" />
						</label>
						<label for="tel" class="flex">
							<span class="text">电话:</span>
							<input type="tel" id="tel" v-model="user.tel" />
						</label>
					</view>
					<view class="margin-top">
						<view class="flex sel-pro align-center">
							<span class="text margin-right-xs">选取地址:</span><input type="text" readonly class="sel-input"
								@tap.prevent="openProvincePicker" v-model="inputAddress" />
							<up-icon name="arrow-down" class="ico-bottom"></up-icon>
						</view>
					</view>
					<view class="margin-top">
						<view class="flex sel-pro align-center">
							<span class="text margin-right-xs">详细地址:</span><input type="text" class="sel-input"
								v-model="detailAdd" />
						</view>
					</view>
				</view>
			</up-modal>
			<!-- 级联选择器 -->
			<view>
				<up-picker :show="showPicker" :columns="columns" @confirm="confirmProvince" @cancel="cancelProvince"
					ref="uPickerRef" @change="handlerChange"></up-picker>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue"
	import {
		onLoad
	} from "@dcloudio/uni-app"
	import useAddressStore from "../../store/address"
	const show = ref(false)
	const showPicker = ref(false)
	// 存放用户编辑选择区域
	const inputAddress = ref("")
	const detailAdd = ref("")
	// 存放用户输入个人信息
	const user = ref({
		username: "",
		tel: ""
	})
	const address = useAddressStore()
	const addressList = ref(address.addressList)
	const uPickerRef = ref(null)
	// 定义变量,当用户点击编辑地址时更新为对应下标
	const clickAddress = ref(-1)
	// 注意数据结构--二维数组
	const columns = ref([
		["四川省", "陕西省"],
		["广元市", "泸州市"],
		["苍溪县", "旺苍县"]
	])
	// 注意数据结构--二维数组
	const columnsDatas = ref([
		["广元市", "泸州市"],
		["西安市", "延安市"]
	])
	// 注意数据结构--三维数组
	const columnsDatasItem = ref([
		[
			["苍溪县", "旺苍县"],
			["泸县", "长宁县"],
		],
		[
			["长安区", "雁塔区"],
			["宝塔区", "延长县"]
		]
	])
	// 筛选首次选取的下标为默认地址的下标
	let defaultIndex = address.selectIndex === -1 ? addressList.value.findIndex(item => item.isDefault) : address
		.selectIndex
	// 存放动态选定的下标
	const isActiveIndex = ref(defaultIndex)
	// 点击选中图标
	const handlerCheck = function(idx) {
		isActiveIndex.value = idx
		// 存放点击位置的下标
		address.saveSelectIndex(idx)
		// 返回上一页
		uni.navigateTo({
			url: "/pages/settleAccounts/settleAccounts"
		})
	}
	// 点击设置地址为默认地址
	const handlerDefault = function(idx) {
		address.changeDefaultAddress(idx)
	}
	// 点击删除地址
	const handlerDelete = function(idx) {
		address.deleteAddress(idx)
		addressList.value = getAddresList()
	}
	// 获取store中的数据
	const getAddresList = function() {
		return address.addressList
	}
	// 编辑地址
	const handlerAddAddress = function() {
		show.value = true
	}
	// 打开省份选取列表
	const openProvincePicker = function() {
		showPicker.value = true
	}
	// 确认省份
	const confirmProvince = function(val) {
		console.log(val.value);
		inputAddress.value = val.value.join(" ")
		showPicker.value = false
	}
	// 取消省份选择
	const cancelProvince = function() {
		showPicker.value = false
	}
	// 设置三级级联选择器规则
	const handlerChange = function(e) {
		const {
			columnIndex,
			index,
			picker,
			indexs
		} = e
		// 当第一列值发生变化时，变化第二列和第三列的值（省份变更，市和区跟着变更）
		if (columnIndex === 0) { // 判断当前变更的是省还是市还是区
			uPickerRef.value.setColumnValues(1, columnsDatas.value[
				index]) //设置市为该省下面的所有市，index是当前省在省份数组的下标，对应市数组中的下表就是该省下面的所有市的数据
			uPickerRef.value.setColumnValues(2, columnsDatasItem.value[index][0]) //设置区域为该省下面第一个市下面的所有区域
		}
		// 当第二列发生变化 变化对应的第三列
		if (columnIndex === 1) {
			uPickerRef.value.setColumnValues(2, columnsDatasItem.value[indexs[0]][index])
		}
	}
	// 点击确认按钮关闭模态框
	const handlerConfirm = function() {
		let addArr = inputAddress.value.split(" ")
		let obj = {
			name: user.value.username,
			phoneNum: user.value.tel,
			isDefault: false, // 是否是默认地址
			province: addArr[0],
			city: addArr[1] || "",
			countries: addArr[2] || "",
			details: detailAdd.value,
			id: Date.now() + ""
		}
		// 从新增按钮界面唤起输入地址信息
		if (clickAddress.value === -1) {
			address.addAddress(obj)
		} else {
			address.changeAddress(clickAddress.value, obj)
		}
		console.log(obj);
		// 清空用户信息
		clearAddressData()
		show.value = false
	}
	// 点击取消按钮关闭模态框
	const handlerCancel = function() {
		clearAddressData()
		show.value = false
	}
	// 清空用户输入的信息
	const clearAddressData = function() {
		// 重置用户输入的地址信息
		inputAddress.value = ""
		detailAdd.value = ""
		user.value.tel = ""
		user.value.username = ""
		// 重置用户点击的地址下标
		clickAddress.value = -1
	}
	// 编辑对应的每一条地址信息
	const editAddress = function(idx) {
		clickAddress.value = idx
		// 展示当前选中编辑的地址信息
		let item = addressList.value[idx]
		console.log(idx);
		user.value.username = item.name
		user.value.tel = item.phoneNum
		inputAddress.value = `${item?.province} ${item?.city} ${item?.countries}`
		detailAdd.value = item.details
		show.value = true
	}
</script>

<style lang="scss">
	.address-item.default {
		position: relative;
		overflow: hidden;

		.tag {
			font-size: 24upx;
			display: block;
			width: 80upx;
			height: 60upx;
			position: absolute;
			right: -32upx;
			top: -22upx;
			background-color: orange;
			text-align: center;
			display: flex;
			align-items: flex-end;
			justify-content: center;
			transform: rotate(45deg);
		}
	}

	.address-item {
		.tag {
			display: none;
		}
	}

	:deep(.icon-item.focus) {
		.u-icon__icon {
			color: deepskyblue !important;
		}
	}

	.detail {
		font-size: 22upx;
	}

	:deep(.add-con) {
		height: 150upx;

		.add-btn {
			.u-icon__icon {
				font-size: 80upx !important
			}
		}
	}

	.text {
		display: inline-block;
		width: 70px;
		font-weight: bold;

		&+input {
			border-bottom: 1px solid #eee;
		}
	}

	.sel-pro {
		position: relative;

		.text {
			width: 180px;
		}

		.ico-bottom {
			position: absolute;
			right: 0upx;
		}
	}

	.sel-input {
		border: 1px solid #eee;
		width: 100%;
	}
</style>