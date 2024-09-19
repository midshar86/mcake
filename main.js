import App from './App'
import uviewPlus from './uni_modules/uview-plus'
// 引入公共头部组件
import headerComp from "./components/header.vue"
// 引入公共列表项目组件
import itemComp from "./components/item.vue"
// 引入首页公共分隔栏
import separatorBarVue from './components/separatorBar.vue'
import * as Pinia from "pinia"
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(Pinia.createPinia())
	app.use(uviewPlus)
	app.component('header-comp', headerComp)
	app.component('item-comp', itemComp)
	app.component('separator-bar-comp', separatorBarVue)
	return {
		app,
		Pinia
	}
}
// #endif