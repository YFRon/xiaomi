<template>
	<div class="app-search">
		<a class="header-btn" data-stat-id="8bc2ac9505456527"><i class="image-icons app-header-icon icon-back" @click="toBack"></i></a>
		<div class="search-item"><input type="search" autocomplete="off" placeholder="搜索商品名称" autocapitalize="off"></div>
		<a class="header-btn" data-stat-id="8bc2ac9505456527"><i class="image-icons app-header-icon icon-search"></i></a>
	</div>
</template>

<script>
	export default{
		methods:{
			toBack(){
				this.$router.history.go(-1);
			}
		}
	}
</script>

<style>
	.app-search-page {
		padding-top: 50px
	}
	
	.app-search-page li {
		list-style-type: none
	}
	
	.app-search {
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		height: 50px;
		position: fixed;
		z-index: 99;
		top: 0;
		left: 0;
		right: 0;
		background: #f2f2f2
	}
	
	.app-search .header-btn {
		display: block;
		margin: 0 .2rem;
		color: #666
	}
	
	.app-search .app-header-icon {
		display: block;
		width: .6rem;
		height: .6rem
	}
	
	.app-search .app-header-icon.icon-back {
		width: .5rem;
		height: .5rem;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABfUlEQVR4AWL4//8/oH1zzA4gCMJgbNv239i2beP+R8gXczpmV79XB9ja3UEDDJCAIAQhCEF/TBAgCEEIUkSKFrEoahD0VFCdOLtmWxQh6E5Okzh7xCyC7n85T+lyL0jREJDT434NMr6cAde7mLHmXDDkfptX1AfkjPk+B9lyRn0fFO01Z8r9SVrRGJAzLaL9CrJ/q4XvlnPBX5IT4/qyqqgJyFkWcX5v8/aXsyKSXKc7FLUBORuGHAeC7K18y5DjQ5CiOiBnU6T6zSjav9WWSPebcrV3qz2R4Tcnba85hyLTb9Le/nL2RY7fqsbLcnJdl30MOSeiwG9dzD4hX1DitnCoSBDlhpwy15VVRY9YDvxWhd/xYAjiF2ORLnYviG3+45dTDopcNbisftvvRrrjlQmzNAeCSLmStP9OSZR9KBx+6cK95LH0TPMC7S80UNGCRxMnbcA0kg8iiFEEhlkYh2Kg7vd/STvPj2Qy1NvKUO+PgCAEIQhBCEIQghAE53kdVfEUUHFYAAAAAElFTkSuQmCC)
	}
	
	.app-search .app-header-icon.icon-search {
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAEx0lEQVQYGe3Bf0yUdRwH8I9GpBtZVpul0y1/ZD8sKzdXbupMh3Pq0jWtzbVs9YfL8scfLq02h1m52R3c832+z/d5HrjjAOH4KQhy4MQD4eS4gXiCePLjBIwU8VeCOAPy3dZf/mEpz56zW93rRRQVFRUVFfU/dGFM+UTHlOrXzq/yf9HwefeS0plpk4/F0b+je5x/UZXIPZV+URmRwMEhQfs940K+ry6hYTY9Wu0Tyze6yxVYwSGgQoUKFSpUCMiwwH6zPLVqZVcsPRrlSwvqVVghwMGhQYMOHTp0aNDAIcBhhQ53UcWLFH4127QrElQwqEi7keUu21W/vnl5+/y2dwKraj8p3pdZ7bzDIYNDQmqweQWFU/cTpU4GAQUMro6SbR2z6D4aFuRb0m4yqFCgDXq3U7hciynOSYQOBertgr2np9I/ODHPlSlDg4AN3m8oPKq+t0GHguSexg/ogepjPbvZkIACbci3lsx3Yr06rECGvSO4gB6SbxMb5pBhDwZeInN1vWJvY5DB+5uX0ShUfmeDAhtKCkOxZCZPogUCMo5vpFEJxRSkcKiQ0BBP5gnMSu+RIaGokEatc2ZqSEBCqasnhszi32SFgBYKLiQDqnfI0CAGz79B5uibkOOVIZCXTob0TrK3qeA4tpfM0TmPQYO427CBDHLrDAoO+H+LITM0r+VQkRy88DwZFFiXBAWOS73PkRl8WzgU5JVVjyeDQi+LPhmOW63zyAxH9yvgKE31jCGDKqZltTPYh+rXkBmKXAIyKpLIsJpn8hskpMDzJZmhKFuAoXIfGeaPO+i1IQXHtpIZPHsVyCgXZJhnUm6TBPtI3UdkBv9mDo5DOVUxZFDpjAO/yHDcCcSTGVreZxDI8F58kgxqelMe5LD3h+aQGbrnsBENYrDjbTKobnMSFLh8A7Fkhpa4Ao8MgcpdZEjTuAI3h4DnRzJLYEMiODKPX3qKDAjOF30a+N3gYjJLz+SMs0lQUL2ZDDiYqkDCQffFcWSeih8sYEht/HUqjVJgjehTIOH0CjJT99QDbRJsKCxtG0+j0PWqvUOGFYdzyGxnlyVf5ZCQ9xM9tJPP5jbaIMEZ7J5B5jv6FR/iUPsP778eRw+hc4ajhEGBs+NkPIXDmTFuRyI4FBSW9EyhB2h9N+O0AgEFR5MoXK49XilzMDBktBZ+Fnia/oZ/ev6elKscAioUOEPtCyl8POucfRwSZOTVunZWxg9MoHtcnuxek5mQE7JBhoAODQIStBttCyh8OubmHEke4LBAhXM4uykt35mWb8212bPSi7M6nX9wWCGQfL2M9U73JjBw2KBfbl1M4VPxmG9tdl76gA0WWCBBhQYNKiRY8TMYMnuzXdVL6S/H90hQwGHvObeEwiv4Vpn1UG1ea9ZV510dOhxIG8npOnykNKF5Lt2jZjeDCgXJl4PLKdx6xja+4Hm94D3Hh471rhXFi+qm0X3UfMsgwKDeOreUIoP3awYFEsTNs8soMnh3MnAw6FdallNkOLGLQUBBcl/LSooMtTtkqODQBlpWU2TwbZGhgEG5fWY1RQbfVhkcDKK/eTVFhtrtMjg49Butiygy+LfKEOAodlKkCHyq94vhUx9T5GiYXjn73FiKioqKior6z/oTCs8KMOW0P6QAAAAASUVORK5CYII=)
	}
	
	.search-item {
		border: 1px solid #e5e5e5;
		padding: 0 .2rem;
		background: #fff;
		width: 100%;
		border-radius: .04rem
	}
	
	.search-item input {
		width: 100%;
		border: 0 none;
		outline: 0;
		font-size: .3rem;
		font-weight: 400;
		height: .5rem;
		padding: .1rem 0;
		line-height: normal
	}
	
	.search-promotion-title {
		line-height: .8rem;
		padding: 0 .3rem;
		font-size: .24rem;
		text-align: left
	}
	
	.search-promotion-list a {
		display: block
	}
	
	.search-promotion-list img {
		width: 100%;
		display: block
	}
	
	.search-key {
		margin: .1rem .2rem;
		text-align: left
	}
	
	.search-key a {
		display: inline-block;
		background: #e4e4e4;
		padding: .14rem .2rem;
		margin: .1rem;
		border: 1px solid #e4e4e4;
		background: hsla(12, 99%, 71%, .05);
		font-size: .24rem;
		color: #484848
	}
	
	.search-key-list {
		text-align: left
	}
	
	.search-key-list a {
		border-bottom: 1px solid #f6f6f6;
		display: block;
		overflow: hidden;
		padding: .2rem .3rem;
		background: #f5f5f5;
		font-size: .28rem;
		line-height: .36rem;
		white-space: nowrap;
		color: #333
	}
</style>