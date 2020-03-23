const request = (url, options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: "https://unidemo.dcloud.net.cn" + url,
			method: options.method,
			data: options.data,
			header: {
				'Content-Type': 'application/json; charset=UTF-8',
			},
			success: res => {
				console.log(res)
				if (res.data.code === 2000) {
				    resolve(res.data)
				} else {
				    reject(res.data)
				}
			},
			fail: (error) => {
				reject(error.data)
			},
			complete: () => {}
		});
	})
}

const get = (url, options = {}) => {
	return request(url, {
		method: 'GET',
		data: options
	})
}

const post = (url, options) => {
	return request(url, {
		method: 'POST',
		data: options
	})
}

const put = (url, options) => {
	return request(url, {
		method: 'PUT',
		data: options
	})
}

// 不能声明DELETE（关键字）
const remove = (url, options) => {
	return request(url, {
		method: 'DELETE',
		data: options
	})
}

module.exports = {
	get,
	post,
	put,
	remove
}
