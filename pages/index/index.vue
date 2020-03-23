<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->

		<!-- #endif -->


		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<image src="../../static/logo.png" mode="widthFix" class="logo"></image>
		<h1>sssssssssss</h1>
		<h1>sssssssssss</h1>
	</view>
</template>

<script>
	import api from "../../components/api/api.js"
	import {
		login
	} from "../../components/api/apis.js"
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

			this.getdata()
		},
		methods: {
			getdata() {
				api.get(login, {}).then(res => {
					console.log(res)
				}).catch(err => {
					console.log(err)
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
