<template>
	<div>
		<Xheader status="comment" />
		<div class="comment-box" style="padding-top: 50px;">
			<Xcard />
			<Xcard />
		</div>
	</div>
</template>

<script>
	import Xheader from '../components/Xheader2.vue';
	import Xcard from '../components/Xcomment_card.vue';
	
	export default{	
		components:{
			Xheader,
			Xcard
		}
	}
</script>

<style>
	.comment-box {
		background: #fff;
		text-align: left
	}
	
	.comment-box .app-header-title{
		text-align: center;
	}
	
	.comment-box .ui-mask {
		z-index: 1000
	}
	
	.comment-box .item {
		padding: .24rem .32rem .32rem
	}
	
	.comment-box .item .comment-header .avatar-img-box {
		margin-right: .24rem;
		width: .8rem;
		height: .8rem;
		overflow: hidden;
		border-radius: 100%
	}
	
	.comment-box .item .comment-header .avatar-img-box img {
		width: 100%
	}
	
	.comment-box .item .comment-header .name {
		font-size: .26rem
	}
	
	.comment-box .item .comment-header .comment-date {
		margin-top: .05rem;
		color: rgba(0, 0, 0, .54)
	}
	
	.comment-box .item .comment-header .like {
		padding-left: .5rem;
		background: transparent url(https://m.mi.com/static/img/love.41668358e6.png) no-repeat 0;
		background-size: auto 100%;
		width: 1rem;
		height: .36rem;
		line-height: .36rem;
		color: #ff6700
	}
	
	.comment-box .item .comment-content .text {
		padding: .12rem 0;
		line-height: 1.5em;
		font-size: .26rem
	}
	
	.comment-box .item .comment-content .photos {
		margin-bottom: .12rem
	}
	
	.comment-box .item .comment-content .photos img {
		width: 1.6rem;
		height: 1.6rem;
		margin: 0 .08rem .08rem 0
	}
	
	.comment-box .item .comment-content .photos.p4 {
		width: 4rem
	}
	
	.comment-box .item .comment-content .photos.p1 {
		text-align: center
	}
	
	.comment-box .item .comment-content .photos.p1 img {
		height: 3rem;
		width: auto
	}
	
	.comment-box .item .comment-reply {
		padding: .16rem;
		background: #f6f6f6
	}
	
	.comment-box .item .comment-reply .comment-replay-item {
		overflow: hidden;
		padding: .05rem 0
	}
	
	.comment-box .item .comment-reply .comment-replay-item .text {
		font-size: .22rem;
		line-height: 1.5em
	}
	
	.comment-box .item .comment-reply .comment-replay-item .avatar {
		float: left;
		width: .32rem;
		height: .32rem;
		overflow: hidden;
		border-radius: 100%;
		margin-right: .2rem
	}
	
	.comment-box .item .comment-reply .comment-replay-item .avatar img {
		width: 100%
	}
	
	.comment-box .item .comment-reply .comment-replay-item.official .avatar {
		background: transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAIAAAD+THXTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozRUMyRjcwNEMyMDAxMUUzQkFFRkExMTA4OEE1OENCMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0MjYwOTVGNDMxM0MxMUU2QTBEMkEzQ0UzRDdFRTg0OSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MjYwOTVGMzMxM0MxMUU2QTBEMkEzQ0UzRDdFRTg0OSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdiMGM5NDhlLWY1Y2QtNDYzMC04YTM5LTg2ZjNlODM3MzBkZCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozRUMyRjcwNEMyMDAxMUUzQkFFRkExMTA4OEE1OENCMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgNhWhQAAAEBSURBVHja7No/CsIwFMfxV/EPOogoCF09grM4egJBBXcXd8+gs4uLix08g6MHEE+gm50cHBxKh6qjELFIikn4/sa2kH7yktcM9ZI4krEvziQIvWRQF7eSE+cCCRIkSJAgQYIECRIkSJAg2Zt82ge3Vz0DxpHcb3I6ymL0y4jDhnlVKpSk1pR27/XG67NzC69S1VZ8s/aSbpUZ7WFzcY703GB/6HjKpOg/b5mupNNX35rvZda1sErLycdZ8Fs2L7zDTnGxWLaZ9PUjy4FIa3vQd4qhSpAgQYIECRIkSJAgQYKUefgfDxIkSJAgQYIECRIkSJAgQYKULSkInQIF4UOAAQB6DygXvkzJdAAAAABJRU5ErkJggg==) no-repeat 50%;
		background-size: cover
	}
	
	.comment-box .item .comment-reply .comment-replay-item.official span {
		color: #ff6700
	}
	
	.comment-box .item .comment-reply .more {
		font-size: .28rem;
		color: #ff6700;
		text-align: center;
		margin-top: .24rem;
		padding: .32rem 0 .16rem
	}
	
	.comment-box .item .comment-reply .more:before {
		border-color: #c9c9c9
	}
	
	.comment-box .item .comment-reply .more:after {
		display: inline-block;
		position: static;
		vertical-align: middle;
		-webkit-transform: translate3d(0, -25%, 0) rotate(135deg) scale(.7);
		transform: translate3d(0, -25%, 0) rotate(135deg) scale(.7)
	}
	
	.comment-box .item .comment-album {
		background: #000;
		width: 7.2rem;
		height: 100%
	}
	
	.comment-box .item .comment-album img {
		display: block;
		width: 100%;
		height: auto
	}
	
	.comment-box .item .comment-album span {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 100%;
		transform: translate3d(-50%, -50%, 0);
		-webkit-transform: translate3d(-50%, -50%, 0);
		text-align: center
	}
	
	.comment-box .item .comment-album-process {
		position: absolute;
		top: .5rem;
		left: 0;
		right: 0;
		color: #fff;
		text-align: center;
		z-index: 100;
		font-size: .24rem
	}
</style>