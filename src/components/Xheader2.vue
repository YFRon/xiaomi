<template>
	<header class="app-header-wrapper app-shell-header" v-if="status==='category'||status==='cart'||status==='comment'" style="position: fixed;width:100%;z-index: 888;">
		<div class="app-header-left">
			<a class="app-header-item"><i class="image-icons app-header-icon icon-back" @click="toBack"></i></a>
		</div>
		<div class="app-header-middle">
			<div class="app-header-title" v-if="status==='category'">{{category_header_title}}</div>
			<div class="app-header-title" v-else-if="status==='cart'">{{cart_header_title}}</div>
			<div class="app-header-title" v-else-if="status==='comment'">{{comment_header_title}}</div>
		</div>
		<div class="app-header-right">
			<a class="app-header-item"><i class="image-icons app-header-icon icon-search" @click="toSearch"></i></a>
		</div>
	</header>
</template>

<script>
	export default {
		props: ["status"],
		data() {
			return {
				category_header_title: "分类",
				cart_header_title: "购物车",
				comment_header_title: "商品评论"
			}
		},
		methods:{
			toBack(){
				this.$router.history.go(-1);
			},
			toSearch(){
				this.$router.push({name:"search"})
			}
		}
	}
</script>

<style>
	.container {
		color: #3c3c3c
	}
	
	.container .list-navbar {
		position: fixed;
		top: 50px;
		bottom: 52px;
		left: 0;
		width: 1.52rem;
		border-right: 1px solid #efefef;
		overflow: hidden
	}
	
	.container .list-navbar ul {
		z-index: 90;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: -.3rem;
		padding: .2rem .3rem .2rem 0;
		background: #fefefe;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch
	}
	
	.container .list-navbar ul::-webkit-scrollbar {
		display: none
	}
	
	.container .list-navbar ul li {
		font-size: .34rem;
		height: .9rem;
		line-height: .9rem;
		overflow: hidden;
		text-align: center;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		transition: -webkit-transform .1s linear;
		transition: transform .1s linear;
		transition: transform .1s linear, -webkit-transform .1s linear;
		transform-origin: center center;
		transform: scale(.76);
		-webkit-transition: -webkit-transform .1s linear;
		-webkit-transform-origin: center center;
		-webkit-transform: scale(.76)
	}
	
	.container .list-navbar ul li span {
		display: inline-block
	}
	
	.container .list-navbar ul li.active {
		color: #fb7d34;
		transform: scale(1);
		-webkit-transform: scale(1)
	}
	
	.container .list-wrap {
		padding-left: 1.8rem;
		padding-right: .32rem
	}
	
	.container .list-wrap>div:last-child {
		min-height: -webkit-calc(100vh - .8rem);
		min-height: calc(100vh - .8rem)
	}
	/*=====================================================*/
	
	.component-list-main img {
		display: block;
		width: 100%;
		height: auto
	}
	
	.component-list-main .img {
		position: relative;
		overflow: hidden
	}
	
	.component-list-main .bgw {
		background-color: #fff
	}
	
	.component-list-main .buybtn {
		width: 2rem;
		background: #ea625b;
		border-radius: .05rem;
		text-align: center;
		color: #fff;
		font-size: .24rem;
		padding: .16rem 0;
		font-weight: 700
	}
	
	.component-list-main .mauto {
		margin: 0 auto
	}
	
	.component-list-main .tag {
		position: absolute;
		top: 0;
		left: 0
	}
	
	.component-list-main .tag img {
		height: .32rem;
		width: auto
	}
	
	.component-list-main .tag2 {
		position: absolute;
		bottom: 0;
		right: 0
	}
	
	.component-list-main .tag2 img {
		display: inline-block;
		width: 1rem;
		height: auto
	}
	
	.component-list-main .info {
		padding: .2rem .27rem;
		text-align: left
	}
	
	.component-list-main .info .l {
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		overflow: hidden;
		-webkit-box-align: justify;
		box-align: justify;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		justify-content: space-between;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center
	}
	
	.component-list-main .info .l .price {
		margin-top: 0
	}
	
	.component-list-main .info .l .price.old {
		font-size: .22rem;
		color: rgba(0, 0, 0, .54)
	}
	
	.component-list-main .name {
		font-size: .28rem;
		color: rgba(0, 0, 0, .87)
	}
	
	.component-list-main .brief,
	.component-list-main .name {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis
	}
	
	.component-list-main .brief {
		margin-top: .06rem;
		font-size: .22rem;
		line-height: .3rem;
		color: rgba(0, 0, 0, .54)
	}
	
	.component-list-main .briefwarp {
		margin-top: .06rem;
		font-size: .22rem;
		line-height: .35rem;
		color: rgba(0, 0, 0, .54)
	}
	
	.component-list-main .price {
		font-size: .28rem;
		color: #ea625b;
		height: 1.5em;
		line-height: 1.5em;
		position: relative;
		display: inline-block
	}
	
	.component-list-main .price.mt32 {
		margin-top: .2rem
	}
	
	.component-list-main .price .old {
		display: inline-block;
		margin: 0 .1rem;
		font-size: .22rem;
		color: rgba(0, 0, 0, .54)
	}
	
	.component-list-main .price span {
		display: inline-block;
		margin-left: .04rem;
		font-size: .2rem
	}
	
	.component-list-main .cells_auto_fill .items {
		height: auto!important;
		display: block
	}
	
	.component-list-main .cells_auto_fill .items img {
		width: 100%
	}
	
	.component-list-main .cells_auto_fill .items .tag img {
		width: auto
	}
	
	.component-list-main .cells_auto_fill.multi_cell {
		position: relative
	}
	
	.component-list-main .cells_auto_fill.multi_cell .items {
		position: absolute
	}
	
	.component-list-main .divider_line {
		margin: 0 auto;
		border-top: none;
		border-left: none;
		border-right: none;
		box-sizing: border-box;
		width: 100%;
		overflow: hidden
	}
	
	.component-list-main .list_one_type1 .item,
	.component-list-main .list_one_type9 .item,
	.component-list-main .list_one_type10 .item,
	.component-list-main .list_one_type12 .item,
	.component-list-main .list_one_type14 .item {
		position: relative;
		width: 100%;
		display: block
	}
	
	.component-list-main .list_one_type2 .item {
		width: 100%
	}
	
	.component-list-main .list_one_type2 .img {
		width: 3.6rem;
		height: 3.6rem
	}
	
	.component-list-main .list_one_type2 .info {
		padding: .64rem .12rem 0 .32rem;
		box-sizing: border-box;
		width: 3.6rem;
		height: 3.6rem
	}
	
	.component-list-main .list_one_type3 .item {
		width: 100%
	}
	
	.component-list-main .list_one_type3 .img {
		width: 3.6rem;
		height: 3.6rem
	}
	
	.component-list-main .list_one_type3 .info {
		width: 3.6rem;
		padding: .64rem .12rem 0 .32rem
	}
	
	.component-list-main .list_one_type11 .item {
		width: 100%
	}
	
	.component-list-main .list_one_type11 .img {
		width: 3rem;
		height: 3rem
	}
	
	.component-list-main .list_one_type11 .info {
		padding: .64rem .12rem 0 .32rem;
		box-sizing: border-box;
		width: 4.2rem;
		height: 3rem
	}
	
	.component-list-main .list_one_type14 .item {
		padding: 0 .12rem
	}
	
	.component-list-main .list_two_type1 .item {
		width: 3.6rem
	}
	
	.component-list-main .list_two_type1 .item:first-child {
		margin-right: .04rem
	}
	
	.component-list-main .list_two_type1 .img {
		width: 3.6rem;
		height: 3.6rem
	}
	
	.component-list-main .list_two_type5 .item {
		width: 3.6rem
	}
	
	.component-list-main .list_two_type5 .item .big {
		width: 3.6rem;
		height: 2.04rem
	}
	
	.component-list-main .list_two_type5 .item:first-child {
		margin-right: .04rem
	}
	
	.component-list-main .list_two_type2 {
		box-sizing: border-box
	}
	
	.component-list-main .list_two_type2 .item:first-child {
		width: 2.4rem;
		margin-right: .04rem
	}
	
	.component-list-main .list_two_type2 .item:first-child .big {
		width: 2.4rem;
		height: 3.2rem
	}
	
	.component-list-main .list_two_type2 .item:last-child {
		width: 4.8rem
	}
	
	.component-list-main .list_two_type2 .item:last-child .big {
		width: 4.8rem;
		height: 3.2rem
	}
	
	.component-list-main .list_two_type3 {
		box-sizing: border-box
	}
	
	.component-list-main .list_two_type3 .item:last-child {
		width: 2.4rem;
		margin-left: .04rem
	}
	
	.component-list-main .list_two_type3 .item:last-child .big {
		width: 2.4rem;
		height: 3.2rem
	}
	
	.component-list-main .list_two_type3 .item:first-child {
		width: 4.8rem
	}
	
	.component-list-main .list_two_type3 .item:first-child .big {
		width: 4.8rem;
		height: 3.2rem
	}
	
	.component-list-main .list_two_type10 {
		box-sizing: border-box
	}
	
	.component-list-main .list_two_type10 .item:first-child {
		width: 4.8rem;
		margin-right: .04rem
	}
	
	.component-list-main .list_two_type10 .item:first-child .big {
		width: 4.8rem;
		height: 2.4rem
	}
	
	.component-list-main .list_two_type10 .item:last-child {
		width: 2.4rem
	}
	
	.component-list-main .list_two_type10 .item:last-child .big {
		width: 2.4rem;
		height: 2.4rem
	}
	
	.component-list-main .list_two_type11 {
		box-sizing: border-box
	}
	
	.component-list-main .list_two_type11 .item:last-child {
		width: 4.8rem;
		margin-left: .04rem
	}
	
	.component-list-main .list_two_type11 .item:last-child .big {
		width: 4.8rem;
		height: 2.4rem
	}
	
	.component-list-main .list_two_type11 .item:first-child {
		width: 2.4rem
	}
	
	.component-list-main .list_two_type11 .item:first-child .big {
		width: 2.4rem;
		height: 2.4rem
	}
	
	.component-list-main .list_two_type12 .item .big {
		width: 3.6rem;
		height: 2.4rem
	}
	
	.component-list-main .list_two_type12 .item:first-child {
		margin-right: .04rem
	}
	
	.component-list-main .list_two_type13 {
		padding: 0 .12rem;
		width: 100%;
		overflow: hidden;
		text-align: center
	}
	
	.component-list-main .list_two_type13 .item {
		width: 3.4rem
	}
	
	.component-list-main .list_two_type13 .item:first-child {
		margin-right: .12rem
	}
	
	.component-list-main .list_three_type1 .item {
		width: 2.4rem;
		box-sizing: border-box
	}
	
	.component-list-main .list_three_type1 .item .big {
		width: 2.4rem;
		height: 2.4rem
	}
	
	.component-list-main .list_three_type1 .item:first-child {
		margin-right: .04rem
	}
	
	.component-list-main .list_three_type1 .item:last-child {
		margin-left: .04rem
	}
	
	.component-list-main .list_action_title .h {
		background: #fff;
		height: 1rem;
		line-height: 1rem;
		font-size: .28rem;
		text-align: center
	}
	
	.component-list-main .list_action_title .h a {
		display: block
	}
	
	.component-list-main .list_action_title .h .ti {
		color: rgba(0, 0, 0, .6)
	}
	
	.component-list-main .list_broadcast .box {
		overflow: hidden;
		height: .8rem;
		width: 100%;
		font-size: .24rem;
		color: #000
	}
	
	.component-list-main .list_broadcast .img {
		width: 1.5rem
	}
	
	.component-list-main .list_broadcast .img img {
		width: 1.5rem;
		height: auto
	}
	
	.component-list-main .list_broadcast .sc_title {
		width: 5rem;
		font-size: .24rem;
		line-height: .28rem;
		-webkit-transition: opacity .2s;
		transition: opacity .2s;
		padding-left: .2rem;
		border-left: 1px solid #b2b2b2;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin: .23rem 0 .23rem .2rem;
		text-align: left
	}
	
	.component-list-main .category_title {
		background: #fff;
		font-size: .28rem;
		text-align: center;
		font-weight: 400;
		margin-top: .2rem;
		height: 1.28rem;
		line-height: 1.28rem;
		overflow: hidden
	}
	
	.component-list-main .category_title span {
		position: relative
	}
	
	.component-list-main .category_title span:after,
	.component-list-main .category_title span:before {
		content: "";
		position: absolute;
		top: 50%;
		left: 0;
		width: 6.4px;
		width: .4rem;
		border-top: 1px solid #e0e0e0;
		transform: translate3d(-150%, -50%, 0);
		-webkit-transform: translate3d(-150%, -50%, 0)
	}
	
	.component-list-main .category_title span:after {
		left: auto;
		right: 0;
		transform: translate3d(150%, -50%, 0);
		-webkit-transform: translate3d(150%, -50%, 0)
	}
	
	.component-list-main .category_group {
		background: #fff;
		margin: -.06rem 0 0
	}
	
	.component-list-main .category_group .box {
		width: 100%;
		overflow: hidden
	}
	
	.component-list-main .category_group .product {
		float: left;
		width: 33.333333333333336%;
		text-align: center;
		margin-top: .2rem;
		margin-bottom: .3rem;
		overflow: hidden
	}
	
	.component-list-main .category_group .product .img {
		width: 1rem;
		height: 1rem;
		margin: 0 auto;
		background: #fff;
		overflow: hidden
	}
	
	.component-list-main .category_group .product .img img {
		width: 100%
	}
	
	.component-list-main .category_group .name {
		margin-top: .28rem;
		white-space: nowrap;
		font-size: .23rem;
		color: rgba(0, 0, 0, .54)
	}
	
	.component-list-main .goods-list {
		padding: 0 .1rem;
		overflow: hidden;
		text-align: left
	}
	
	.component-list-main .goods-list .item {
		background: #fff
	}
	
	.component-list-main .goods-list .item .img-box {
		display: block;
		position: relative;
		height: 4.36rem;
		overflow: hidden
	}
	
	.component-list-main .goods-list .item .mark {
		position: absolute;
		top: 0;
		left: 0
	}
	
	.component-list-main .goods-list .item .mark span {
		display: inline-block
	}
	
	.component-list-main .goods-list .item .mark span img {
		width: auto;
		height: .36rem
	}
	
	.component-list-main .goods-list .item .badge {
		position: absolute;
		right: 0;
		bottom: 0
	}
	
	.component-list-main .goods-list .item .badge span {
		display: inline-block;
		width: .86rem;
		margin-left: .08rem
	}
	
	.component-list-main .goods-list .item .info-box {
		height: 1.52rem;
		padding: 0 .28rem;
		color: #000
	}
	
	.component-list-main .goods-list .item .info-box .text {
		height: 1.52rem;
		padding-top: .6rem;
		padding-right: .2rem
	}
	
	.component-list-main .goods-list .item .info-box .name {
		font-size: .32rem;
		font-weight: bolder;
		color: #3c3c3c;
		white-space: nowrap
	}
	
	.component-list-main .goods-list .item .info-box .brief {
		font-size: .2rem;
		color: #3c3c3c;
		height: 1.5em;
		line-height: 1.5em;
		white-space: nowrap
	}
	
	.component-list-main .goods-list .item .info-box .action {
		width: 2.2rem
	}
	
	.component-list-main .goods-list .item .info-box .ui-button {
		font-weight: bolder
	}
	
	.component-list-main .goods-list .item .info-box .price {
		font-size: .32rem;
		color: #ea625b;
		font-weight: 700;
		text-align: right;
		height: 1.5em;
		line-height: 1.5em
	}
	
	.component-list-main .goods-list .item .info-box .price i,
	.component-list-main .goods-list .item .info-box .price span {
		font-size: .2rem;
		vertical-align: text-top;
		font-weight: lighter;
		line-height: .32rem
	}
	
	.component-list-main .goods-list .item .info-box .price span {
		vertical-align: baseline
	}
	
	.component-list-main .goods-list .item .info-box .price del {
		margin-left: .1rem;
		font-size: .2rem;
		color: #666;
		font-weight: lighter;
		vertical-align: baseline
	}
	
	.component-list-main .goods-list .item .info-box .price del i,
	.component-list-main .goods-list .item .info-box .price del span {
		font-size: .16rem;
		line-height: normal
	}
	
	.component-list-main .goods-list .item-md {
		float: left;
		width: 3.44rem
	}
	
	.component-list-main .goods-list .item-md:nth-child(2n) {
		margin-left: .12rem
	}
	
	.component-list-main .goods-list .item-md .img-box {
		height: 2.8rem
	}
	
	.component-list-main .goods-list .item-md .info-box {
		height: auto;
		padding: .32rem 0;
		text-align: center
	}
	
	.component-list-main .goods-list .item-md .info-box .text {
		padding-top: 0;
		padding-right: 0;
		height: auto
	}
	
	.component-list-main .goods-list .item-md .info-box .name {
		font-size: .24rem
	}
	
	.component-list-main .goods-list .item-md .info-box .price {
		text-align: center
	}
	
	.component-list-main .goods-list .item-md .info-box .action {
		width: 1.76rem;
		margin: 0 auto
	}
	
	.component-list-main .ui-button {
		display: block;
		width: 100%;
		height: .6rem;
		line-height: .6rem;
		text-align: center;
		font-size: .24rem;
		background: #ea625b;
		border-radius: 3px;
		span: #fff
	}
	
	.component-list-main .ui-button-xs {
		height: .48rem;
		line-height: .48rem;
		font-size: .2rem
	}
	
	.component-list-main .align-center {
		text-align: center!important
	}
</style>