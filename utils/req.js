// 封装一个通用的Promise请求方法
export const _req = function(url, method = "GET", data = {}, header = {}) {
	return new Promise((resolve, reject) => {
		uni.request({
			url,
			method,
			data,
			header,
			success(res) {
				resolve(res)
			},
			fail(err) {
				reject(err)
			}
		})
	})
}

let baseUrl = "https://hvxwxm03.lc-cn-n1-shared.com"
let header1 = {
	"X-LC-Id": "hVXWxM03DusAl6pWiQ8GDIjI-gzGzoHsz",
	"X-LC-Key": "Cza9BaewGkIgj8hVGRHSYb16",
	"content-type": "application/json"
}
let header2 = {
	"X-LC-Id": "hVXWxM03DusAl6pWiQ8GDIjI-gzGzoHsz",
	"X-LC-Key": "Cza9BaewGkIgj8hVGRHSYb16"
}
// 封装一个post方法,向leanCloud发送请求存储数据,带上请求头
export const _post = function(url, data) {
	return _req(baseUrl + url, "POST", data, header1)
}
// 封装一个get方法,向leanCloud发送请求获取数据,带上请求头
export const _get = function(url) {
	return _req(baseUrl + url, "GET", {}, header2)
}