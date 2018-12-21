<template>
	<div>
		<header class="header" v-if="status==='home'">
			<div class="app-header-wrapper">
				<div class="app-header-left">
					<div class="app-header-item logo"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAyCAYAAAD2vz2aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjQ2OUE2MkU0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjQ2OUE2MkY0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCOUQ0QkM2RjREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCOUQ0QkM3MDREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiL8gcIAAAF1SURBVHja7Ju/LwRRFEbf+FVsQ0dBdJKNSksUSqVCr6AhKxGVwn+gVUpQEI1So5XoZUOhEbKMDiESIeOTzPbvzpoxz5wvOd3duzsn++7cSXajZMU9OOeGXPmTiHtxIU7FoYh/oe+ZmPKsjSMJS1yY+RS7YrNDcTdi1Le4y4WbHrEorsRcUW8asrB2BsSxWEeYLVtiCWG2bIsJhPmnV+zkeV3/TZhLv2HzCLNlFWG2TIqRvHYZa97FR84XXEvnUSeZEft/LexZDIvXnIVFop6uCQ3RnaHHeBmO5FMBstrPjZdiTUyLlww9Bqs6w87FcobX9Vd56B+IZoZjXVlhP0f0qAwfJKS1ookw+w0HYaEFYQVs+j4ZE7Oed6o3sVfA00OphW2IBUN9S5xU+Uhad6A+ZhhDnyAMYQhDGMIQRhCGMIQhDGEEYQhDGMIQhjCCMIQhDGEIIwhDWFHCLP81vPOsezT0/BK3nj0tP1i59qxrGXrG3wIMAK5yNsqRAjAyAAAAAElFTkSuQmCC"></div>
				</div>
				<div class="app-header-middle">
					<div class="app-header-title" @click="toSearch"><i class="image-icons app-header-icon icon-search"></i>搜索商品名称</div>
				</div>
				<div class="app-header-right">
					<div class="app-header-item"><i class="image-icons app-header-icon icon-user" @click="toUser"></i></div>
				</div>
			</div>
			<div class="nav-wrap">
				<div class="nav-display" @click="showBox"><i class="image-icons icon-arrow-down"></i></div>
				<div class="nav-item-layer" v-show="boxShow">
					<div class="title">全部</div>
					<div class="btn-wrap">
						<span class="extra-btn mr-interval" v-for="(i,index) in navs" :key="index" @click="chose(index,showBox())" :class="{cur:index===nav}">{{i.title}}</span>
					</div>
				</div>
				<div class="nav" v-show="!boxShow">
					<div class="nav-item" v-for="(n,index) in navs" :key="index" @click="chose(index)" :class="{cur:index===nav}">
						<span>{{n.title}}</span>
					</div>
				</div>
			</div>
		</header>
	</div>
</template>

<script>
	export default {
		props:["status"],
		data() {
			return {
				navs: [{
						title: "推荐",
						status: "recommend"
					}, {
						title: "双十一狂欢",
						path: "happy"
					},
					{
						title: "手机",
						path: "phone"
					}, {
						title: "智能",
						path: ""
					},
					{
						title: "电视",
						path: "recommend"
					},
					{
						title: "笔记本",
						path: "recommend"
					},
					{
						title: "生活周边",
						path: "recommend"
					},
					{
						title: "家电",
						path: "recommend"
					},
					{
						title: "新款游戏本",
						path: "recommend"
					},
					{
						title: "大内存手机",
						path: "recommend"
					},
					{
						title: "影视娱乐",
						path: "recommend"
					}
				],
				boxShow: false
			}
		},
		methods: {
			chose(index) {
				this.$store.dispatch("setNav",index);
			},
			showBox(){
				this.boxShow = !this.boxShow;
			},
			toSearch(){
				this.$router.push({name:"search"})
			},
			toUser(){
				this.$router.push({
					name: "user"
				});
			}
		},
		computed:{
			nav(){
				return this.$store.getters.getNav
			}
		}
	}
</script>

<style scoped>
	.header {
		position: fixed;
		top: -1px;
		left: 0;
		right: 0;
		z-index: 99;
		box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2);
		background: #f2f2f2
	}
	
	.app-header-wrapper {
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		justify-content: space-between;
		height: .84rem;
		background: #f2f2f2;
		color: #666;
		padding: 0
	}
	
	.app-header-wrapper>div,
	.app-header-wrapper {
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center
	}
	
	.app-header-wrapper .app-header-item {
		display: block;
		width: .6rem;
		margin: 0 .2rem
	}
	
	.app-header-wrapper .app-header-item .app-header-icon {
		line-height: .6rem
	}
	
	.app-header-wrapper .logo img {
		width: 80%
	}
	
	.app-header-wrapper .app-header-middle {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		font-size: .3rem
	}
	
	.app-header-wrapper .app-header-title {
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: start;
		-webkit-justify-content: flex-start;
		justify-content: flex-start;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		border: 1px solid #e5e5e5;
		text-align: left;
		width: 100%;
		color: rgba(0, 0, 0, .3);
		background-color: #fff;
		border-radius: .04rem
	}
	
	.app-header-wrapper .app-header-icon {
		display: block;
		width: .6rem;
		height: .6rem
	}
	
	.app-header-wrapper .app-header-icon.icon-search {
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAEx0lEQVQYGe3Bf0yUdRwH8I9GpBtZVpul0y1/ZD8sKzdXbupMh3Pq0jWtzbVs9YfL8scfLq02h1m52R3c832+z/d5HrjjAOH4KQhy4MQD4eS4gXiCePLjBIwU8VeCOAPy3dZf/mEpz56zW93rRRQVFRUVFfU/dGFM+UTHlOrXzq/yf9HwefeS0plpk4/F0b+je5x/UZXIPZV+URmRwMEhQfs940K+ry6hYTY9Wu0Tyze6yxVYwSGgQoUKFSpUCMiwwH6zPLVqZVcsPRrlSwvqVVghwMGhQYMOHTp0aNDAIcBhhQ53UcWLFH4127QrElQwqEi7keUu21W/vnl5+/y2dwKraj8p3pdZ7bzDIYNDQmqweQWFU/cTpU4GAQUMro6SbR2z6D4aFuRb0m4yqFCgDXq3U7hciynOSYQOBertgr2np9I/ODHPlSlDg4AN3m8oPKq+t0GHguSexg/ogepjPbvZkIACbci3lsx3Yr06rECGvSO4gB6SbxMb5pBhDwZeInN1vWJvY5DB+5uX0ShUfmeDAhtKCkOxZCZPogUCMo5vpFEJxRSkcKiQ0BBP5gnMSu+RIaGokEatc2ZqSEBCqasnhszi32SFgBYKLiQDqnfI0CAGz79B5uibkOOVIZCXTob0TrK3qeA4tpfM0TmPQYO427CBDHLrDAoO+H+LITM0r+VQkRy88DwZFFiXBAWOS73PkRl8WzgU5JVVjyeDQi+LPhmOW63zyAxH9yvgKE31jCGDKqZltTPYh+rXkBmKXAIyKpLIsJpn8hskpMDzJZmhKFuAoXIfGeaPO+i1IQXHtpIZPHsVyCgXZJhnUm6TBPtI3UdkBv9mDo5DOVUxZFDpjAO/yHDcCcSTGVreZxDI8F58kgxqelMe5LD3h+aQGbrnsBENYrDjbTKobnMSFLh8A7Fkhpa4Ao8MgcpdZEjTuAI3h4DnRzJLYEMiODKPX3qKDAjOF30a+N3gYjJLz+SMs0lQUL2ZDDiYqkDCQffFcWSeih8sYEht/HUqjVJgjehTIOH0CjJT99QDbRJsKCxtG0+j0PWqvUOGFYdzyGxnlyVf5ZCQ9xM9tJPP5jbaIMEZ7J5B5jv6FR/iUPsP778eRw+hc4ajhEGBs+NkPIXDmTFuRyI4FBSW9EyhB2h9N+O0AgEFR5MoXK49XilzMDBktBZ+Fnia/oZ/ev6elKscAioUOEPtCyl8POucfRwSZOTVunZWxg9MoHtcnuxek5mQE7JBhoAODQIStBttCyh8OubmHEke4LBAhXM4uykt35mWb8212bPSi7M6nX9wWCGQfL2M9U73JjBw2KBfbl1M4VPxmG9tdl76gA0WWCBBhQYNKiRY8TMYMnuzXdVL6S/H90hQwGHvObeEwiv4Vpn1UG1ea9ZV510dOhxIG8npOnykNKF5Lt2jZjeDCgXJl4PLKdx6xja+4Hm94D3Hh471rhXFi+qm0X3UfMsgwKDeOreUIoP3awYFEsTNs8soMnh3MnAw6FdallNkOLGLQUBBcl/LSooMtTtkqODQBlpWU2TwbZGhgEG5fWY1RQbfVhkcDKK/eTVFhtrtMjg49Butiygy+LfKEOAodlKkCHyq94vhUx9T5GiYXjn73FiKioqKior6z/oTCs8KMOW0P6QAAAAASUVORK5CYII=);
		background-size: .4rem .4rem
	}
	
	.app-header-wrapper .app-header-icon.icon-user {
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAkFBMVEUAAABiYmJoaGhxcXFwcHBwcHBycnJwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBzc3NycnJwcHB2dnZwcHBwcHBxcXFwcHBwcHBwcHBwcHBwcHBwcHBwcHBvb29wcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBvb29wcHBwcHBwcHBwcHBnZ2dwcHC6NtRcAAAAMHRSTlMAAwoXHycsRXWfxdzz+jB+vv8ljv/+72HU682aahOXTQ+wNblUtazlb1elWuE7B4ObTEwxAAADdklEQVR4AZWWh5rqOgyEnd7LEA2k0Os24P3f7vLdBVOSTTizBbfflmVZWHXJUBeZlu24rmNbpm56U5bnB2EUJ0kchYHvWep9pVke40FxnqX9hLZ4VEQQgEk8vihOCAiiYnTpHGKNSQmAVd1MvdRxUm/a1BUBlJNLZz87mycAo2axNHTjctFEBJL5rI82lL0SYjxfX+sX/ZbW8zEoK1sZPexGiHL7cDa6uC1B2XTQ2uaVEDv3idS8uwNl9bflhRB7q7vbUNYelOKvhRck8g5W0znIhTI6+2rwsO5zyfpA1N2zfwg5Ub2akPLR6a0I2Jn9J2nugKjLZ5/s3FDLLfxUba0guTUYgLlg1e6wIkg2HPqZIJq1DRpj3Gu1HlbpYbrVT6QcDcOjWpKPFlxAclMNyswFRQv+ElmpN7QS+WrBe5H9kNV6XP/Kre5HuL3yHLIx1LB2gnkLzii1peuW9RwES10KhVkL/o5x8G6tXlnq8kXTn91vCjHU8Ufi75Zv3AMwvbUWIuFSGbebWIlsr+UpcXBVSyHk6zbjBGRxO3UnB+PrPT99CULVVkZU66txy42Q+/X/w7c1KGdtBJh1wE6lM5Sh0lKIn+Dbm+5iEF+3O1wIK0d1aA6Oj7ddpzkAxuMEv9le/bprTDSdsZNWxEanCescERAgCSeXputuwCrtjsMMRHEZdI2p1N/XUdhMLB1lBYjsrzSxAZk9BOPSSUfGfTaflFyb1kqtEZhkevjvqNv/U5YQUU9qXlQgG/s+n6GH2gGIaqF6tD2ACL/NVg74DEEctqpXXg0i3kxe5lzFIGpPDcgJElA4ffouiYVIAkcN6vRdM0HsKkP7MUHC8PvUz11d3JDE8Q57QrL47Rt4DB2bmMRudoetXMi4OQ4+h2b+Dwis7Ke7vieIH3/Zz7orgizPs5eT8ksS3Lt97LEE8XN+fa9dKs75AKI89rCREJujemavVS8HJTr+FdpuKUQwa6FX3ArAru8znXtQmH8/aMwClFX3gDOI5tT3oDk1IM6dG44fEknPjY+7nLbDLXuqvscUsGs3b2NtUR+dgfG2tcRe9PusD7ZLyKplzw94VidjSKoAfvTurrAPRLZ6Q3YE+C8WBoLQHjmjATkjO4QEL8EVgUn1lhKidJXxAC9A4k2RWDzBn5LwPSVkIp9Pm16m7j8ovWaF/wCc31NtcLeHeAAAAABJRU5ErkJggg==);
		background-size: .4rem .4rem
	}
	
	.download-app-go {
		position: relative;
		display: block;
		height: 1rem;
		overflow: hidden
	}
	
	.download-app-go a {
		display: block
	}
	
	.download-app-go a img {
		display: block;
		width: 100%;
		height: auto
	}
	
	.download-app-go .close {
		position: absolute;
		width: .5rem;
		height: 1rem;
		text-align: center;
		left: 0;
		top: 50%;
		margin-top: -.5rem
	}
	
	.download-app-go .close a {
		display: block
	}
	
	.nav-wrap {
		position: relative;
		overflow: hidden
	}
	
	.nav-wrap .nav-display {
		position: absolute;
		right: 0;
		top: 0;
		width: .68rem;
		height: .55rem;
		line-height: .55rem;
		background-color: #f2f2f2;
		box-shadow: -15px 0 15px 0 #f2f2f2;
		z-index: 99
	}
	
	.nav-wrap .nav-display .image-icons {
		vertical-align: middle;
		width: .4rem;
		height: .4rem;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABlBMVEX///+9vb18/6H5AAAAAXRSTlMAQObYZgAAAF9JREFUeNrtzCESwDAMxMD4/59umIBJJ6JalLo3OkmS5Ie55IbRyAmrUQtmlxisoeswtR3GurPn+4crcXYljq7EyZU4uBKfrsSHK/F0JR6mhCPYDmwHdKzVUaWTJElefOyLAQtGqMZ7AAAAAElFTkSuQmCC);
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
		-webkit-transition: -webkit-transform .2s linear;
		transition: -webkit-transform .2s linear;
		transition: transform .2s linear;
		transition: transform .2s linear, -webkit-transform .2s linear
	}
	
	.nav-wrap .nav-display .image-icons.unfold {
		-webkit-transform: rotate(180deg);
		transform: rotate(180deg)
	}
	
	.nav {
		overflow-x: auto;
		background: #f2f2f2;
		font-size: .26rem;
		white-space: nowrap;
		z-index: 2
	}
	
	.nav .nav-item {
		display: inline-block;
		padding: 0 .25rem
	}
	
	.nav .nav-item span {
		display: inline-block;
		line-height: .55rem;
		border-bottom: 2px solid rgba(237, 91, 0, 0);
		color: rgb(116, 116, 116);
		border-color: rgb(242, 242, 242);
	}
	
	.nav .cur span {
		color: rgb(237, 91, 0);
		border-color: rgb(237, 91, 0);
	}
	
	.nav .nav-item-extra {
		padding-right: .76rem;
		display: inline-block
	}
	
	.nav::-webkit-scrollbar {
		height: 0;
		background: transparent
	}
	
	.nav-item-layer {
		background-color: #f2f2f2;
		font-size: .28rem;
		text-align: left;
		padding: 0 0 0 0.25rem;
		-webkit-transition: max-height .3s ease-in-out;
		transition: max-height .3s ease-in-out;
		overflow: hidden
	}
	
	.nav-item-layer .title {
		padding-top: .25rem
	}
	
	.nav-item-layer .btn-wrap {
		margin-top: .34rem;
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-flex-wrap: wrap;
		flex-wrap: wrap
	}
	
	.nav-item-layer .btn-wrap .extra-btn {
		margin-bottom: .24rem;
		display: inline-block;
		width: 1.52rem;
		height: .56rem;
		text-align: center;
		line-height: .56rem;
		border: 1px solid #e5e5e5;
		border-radius: 4px;
		font-size: .25rem;
		background-color: #fff
	}
	
	.nav-item-layer .btn-wrap .extra-btn.mr-interval {
		margin-right: .2rem
	}
	
	.nav-item-layer .btn-wrap .extra-btn.cur {
		background-color: #fde0d5;
		border-color: #ff6700;
		color: #ff6700
	}
	
	.height-enter-active {
		max-height: 10rem
	}
	
	.height-enter {
		max-height: .66rem
	}
	
	.height-leave-to,
	.height-leave {
		max-height: 0
	}
	
	.container {
		color: #3c3c3c;
		position: relative
	}
	
	.container .bodys {
		padding-bottom: 52px;
		position: absolute;
		top: 1.39rem;
		left: 0;
		right: 0;
		overflow: hidden;
		background: #fff;
		-webkit-transition: -webkit-transform .4s cubic-bezier(.55, 0, .1, 1);
		transition: -webkit-transform .4s cubic-bezier(.55, 0, .1, 1);
		transition: transform .4s cubic-bezier(.55, 0, .1, 1);
		transition: transform .4s cubic-bezier(.55, 0, .1, 1), -webkit-transform .4s cubic-bezier(.55, 0, .1, 1)
	}
	
	.container .bodys.slide-left-enter {
		-webkit-transform: translate3d(100%, 0, 0);
		transform: translate3d(100%, 0, 0)
	}
	
	.container .bodys.slide-right-enter {
		-webkit-transform: translate3d(-100%, 0, 0);
		transform: translate3d(-100%, 0, 0)
	}
	
	.container .bodys.slide-right-leave-active {
		-webkit-transform: translate3d(100%, 0, 0);
		transform: translate3d(100%, 0, 0)
	}
	
	.container .bodys.slide-left-leave-active {
		-webkit-transform: translate3d(-100%, 0, 0);
		transform: translate3d(-100%, 0, 0)
	}
	
	.container .with-advert .bodys {
		top: 2.39rem
	}
	/*=====*/
</style>