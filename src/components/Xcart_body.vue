<template>

	<div data-v-bc186c1a="" class="container fluid app-view app-view-with-header app-view-with-footer" v-if="status==='cart'" style="padding-top: 50px;">
		<div class="page-wrap">
			<Xlist />
			<Xlike />
		</div>
		<div data-v-3157529a="" class="insurance-pop"></div>
	</div>

</template>

<script>
	
	import Xlist from './Xcart_list.vue';
	import Xlike from './XguessLike.vue';
	
	export default {
		props: ["status"],
		components:{
			Xlist,
			Xlike
		}
	}
</script>

<style>
	
	.page-wrap{
		height: 100%;
		overflow-x: hidden;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch
	}
	
	.nologin>a{
		height: 1.04rem;
		padding: 0 .56rem 0 .32rem;
		position: relative;
		color: rgba(0, 0, 0, .54)
	}
	
	.nologin>a span{
		font-size: .32rem;
		color: rgba(0, 0, 0, .87);
		display: block;
		text-align: left
	}
	
	.nologin>a em{
		font-style: normal;
		font-size: .24rem;
		text-align: right
	}
	
	.nologin>a:after {
		content: "";
		position: absolute;
		right: 5.12px;
		right: .32rem;
		top: 50%;
		width: 2.88px;
		width: .18rem;
		height: 2.88px;
		height: .18rem;
		border-left: 1px solid currentColor;
		border-top: 1px solid currentColor;
		transform: translate3d(0, -50%, 0) rotate(135deg);
		-webkit-transform: translate3d(0, -50%, 0) rotate(135deg)
	}
	
	.noitems{
		background: #ebebeb;
		padding: .2rem
	}
	
	.noitems>a{
		height: 1.44rem;
		font-size: .24rem;
		text-decoration: none;
		text-align: center
	}
	
	.noitems>a span{
		display: inline-block;
		line-height: .8rem;
		background: url(/static/img/cartnull.daaf7926f8.png) no-repeat 0;
		background-size: auto 100%;
		padding: 0 .16rem 0 .96rem;
		color: rgba(0, 0, 0, .27)
	}
	
	.noitems>a em{
		display: inline-block;
		border: 1px solid rgba(0, 0, 0, .15);
		box-sizing: border-box;
		height: .5rem;
		line-height: .5rem;
		padding: 0 .24rem;
		color: rgba(0, 0, 0, .87);
		font-style: normal
	}
	
	.cart-list{
		background: #fff
	}
	
	.cart-list .item{
		border-bottom: 1px solid #f6f6f6;
		line-height: 0
	}
	
	.cart-list .item .ui-flex{
		padding: .24rem 0
	}
	
	.cart-list .item .choose{
		-webkit-box-flex: 0;
		-webkit-flex: none;
		flex: none;
		width: .6rem;
		padding: 0 .2rem;
		height: 1.8rem
	}
	
	.cart-list .item .choose.unchecked{
		background: url("//s1.mi.com/m/images/m/check_normal.png") 50% 50% no-repeat;
		background-size: .4rem .4rem
	}
	
	.cart-list .item .choose.checked{
		background: url("//s1.mi.com/m/images/m/check_press.png") 50% 50% no-repeat;
		background-size: .4rem .4rem
	}
	
	.cart-list .item .imgProduct{
		-webkit-box-flex: 0;
		-webkit-flex: none;
		flex: none;
		display: block;
		position: relative;
		width: 1.8rem;
		height: 1.8rem;
		margin-right: .2rem;
		border: 1px solid #eee;
		border-radius: 2px
	}
	
	.cart-list .item .imgProduct img{
		width: auto;
		height: 100%
	}
	
	.cart-list .item .info{
		text-align: left
	}
	
	.cart-list .item .info .name{
		font-size: .28rem;
		line-height: .32rem;
		color: #666;
		margin-bottom: .12rem;
		margin-right: .3rem;
		display: -webkit-box;
		display: flex;
		-webkit-box-align: start;
		box-align: start
	}
	
	.cart-list .item .info .name span{
		display: block
	}
	
	.cart-list .item .info .name span::last-child {
		width: 100%
	}
	
	.cart-list .item .info .ico{
		background: #ffa800;
		border-radius: .04rem;
		color: #fff;
		padding: .03rem .1rem;
		font-size: .22rem;
		margin-right: .1rem
	}
	
	.cart-list .item .info .ico.ico_bargain{
		background: #ffa800
	}
	
	.cart-list .item .info .ico.ico_gift{
		background: #5b77d6
	}
	
	.cart-list .item .info .ico.ico_seckill,
	.cart-list .item .info .ico.ico_special{
		background: #e53935
	}
	
	.cart-list .item .info .ico.ico_ernie,
	.cart-list .item .info .ico.ico_giftcard{
		background: #81c646
	}
	
	.cart-list .item .info .ico.ico_presales{
		background: #ffa800;
		background: #81c646
	}
	
	.cart-list .item .info .ico.ico_youpin{
		background: #c1977a
	}
	
	.cart-list .item .info .price-without{
		padding: .12rem 0;
		font-size: .24rem;
		color: #999;
		margin-bottom: .12rem
	}
	
	.cart-list .item .info .price-without span{
		margin-right: .1rem
	}
	
	.cart-list .item .info .item-tip{
		line-height: 1.5em;
		margin-bottom: .12rem
	}
	
	.cart-list .item .info .item-tip span{
		color: #ff5722
	}
	
	.cart-list .item .info .delete{
		float: right;
		margin-right: .2rem;
		display: block
	}
	
	.cart-list .item .info .delete .icon-delete{
		width: .6rem;
		height: .6rem;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAD6klEQVR4Ae2aA4xkSxSGn23bDB/DZ9u2wmcbo8bYttG2lUy717a9wbNr/5Ms7/R6t3FzJvlTubc09XXVQeoeIoTYhVi7qGQxIAbEgBgQA2JADIgBMSAWA2JADIgBMaC//vrrmGnTpn3rdrtHvV6vxufzje6J0FYbCASGUX7xyy+/HC1bQMlksq6kpESQlEqlUKlUeyRqW1xcLCoqKgQAl8sS0IwZM44fGRnZUFlZKSwWiwY7ogi7o2xPFAwGi4xGo7WsrExotdrF+DtSdoCwe04fHR3dUFNTI+bNm3fr3vZPpVJPVVVVCZ1Ot2TmzJnHyQ7QlClTTh0bG1tTXV0t5s6d++De9o/FYq9uBrQAgI+VpQ3C4lbRInFE7tzbvpMnT36ejqfJZJqbVzbI5XKdDV0AnZNOTqfzHLvdfs74+Pg1Go1mXV1dncBuetTv9x9qtVqPQJtdymazHQE7dGg4HH6jtrZWwBYtwW66FH2lc0nnvcDj8ZyRdUBDQ0OroH+gX7fTL6Qtz8PDw78ODAz83tbWJpqamkR3d/dCPCdQN3lPNDg4mECfxdSXxqCxdjUfCX3+gc1bmnVA5Hq3qLy8XJCNaWxsFPRr07O0jt5vfqZyj0Rt6XhRXxpDOi69pzm3r6OSHELWAS1atOgR6Cno8VWrVt2L7W1G3EKu3L1mzZq78f6hhQsXPozygGrzmA9hjnth22IKhUIgkBzB/3AX3j+B+qdg6x7JOqA07vinwsJCARtRlylDiiM8SnMiiPw4571YNBqtQPRL7rgzU4B6enrMarVaINb6MS8AbT5inRncQWb8KPkFyGw2TwC0cePGa2Ejbv79999PltatXbv2aNiTm1Bev379+gmpBJLU06kvxrgmjSeVByDkYrPIGyFVeExa197efgm5cZTkxs9PM+475J1wdJNyBjRzPwC9TYCQrMZlCwi52BSKVWbNmjXB/XZ2dl7c0tIiUP6FBZ+XJhd7k9IUvV4fZkAMiAExIAbEgBgQA2JADIgBMSAGxIAYUAYBrdkM6Nk0gC7fDEhgwRemAfTeZkALZAlo6tSph2Fx1bie8c+ZM+dmab++vr5zAMeCUqvRaM6Q1icSiXsbGhoCGFctL0AZEANiQAxIKr72MRqNHZkC1N/fb8qbi8NIJFJN9+S4em7IFCDclmhKSkoIUEE+AKosKCgQiHkmh8Phn0KhUAm+MVQcDNHYmK8ANmguzYlYqTjnAa1cufKx+vp6QbsI2z4jwlx0n0b3bffnLiDJJZ/dbrfg67AQSu/BFI5yyOFwGFKp1Ev8pf3+igExIAbEgBgQA2JALAbEgBgQA2JADIgBMSDWJly2untRJ8f7AAAAAElFTkSuQmCC)
	}
	
	.cart-list .item .info .xm-input-number{
		display: inline-block;
		border: 1px solid #eee
	}
	
	.cart-list .item .info .xm-input-number .image-icons{
		opacity: .3;
		width: .6rem;
		height: .6rem;
		background-size: .3rem .3rem
	}
	
	.cart-list .item .info .xm-input-number .icon-cross{
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAc0lEQVR4AWJIS0ujBBsD8W0oNga0YwcYAMMwGIV3ve3kW88x3R3GZAlDYJTgLx4eBfVBkFT+qkKaZ1+7EvIkyK2EWA4IECA/AQECZPW6Z6J6GBYlImNmgVwB2eIhRJxhYGqAABkMCBAgLOEtQY46ZIJDzQtkpFzgLwrvWQAAAABJRU5ErkJggg==)
	}
	
	.cart-list .item .info .xm-input-number .icon-line{
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAT0lEQVR4Ae3TgQXAAAxE0azXDpLJKx3jmoOO0IR+fA7w4ELSioAAAQIECBAgn0My8+iq01BlQwwjXswWyG3I6TGIuGz47WuAAAECBAgQIA8XIA86877kLgAAAABJRU5ErkJggg==)
	}
	
	.cart-list .item .info .xm-input-number .input-add,
	.cart-list .item .info .xm-input-number .input-sub{
		display: inline-block;
		width: .6rem;
		height: .6rem;
		position: relative;
		vertical-align: middle;
		background-color: #fafafa;
		text-align: center
	}
	
	.cart-list .item .info .xm-input-number .input-add.active,
	.cart-list .item .info .xm-input-number .input-sub.active{
		background-color: #f4f4f4
	}
	
	.cart-list .item .info .xm-input-number .input-add.active .image-icons,
	.cart-list .item .info .xm-input-number .input-sub.active .image-icons{
		opacity: 1
	}
	
	.cart-list .item .info .xm-input-number .input-num{
		display: inline-block;
		vertical-align: middle;
		min-width: .6rem;
		padding: 0 .12rem;
		text-align: center;
		font-size: .32rem
	}
	
	.cart-list .item .append .insurance{
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		justify-content: space-between;
		border: 1px solid #f6f6f6;
		padding: .14rem .2rem;
		border-radius: .04rem;
		background: #f6f6f6;
		font-size: .24rem;
		margin: 0 .2rem .2rem
	}
	
	.cart-list .item .append .insurance .i1{
		margin-right: .12rem
	}
	
	.cart-list .item .append .insurance .i1 img{
		width: .5rem;
		height: .5rem
	}
	
	.cart-list .item .append .insurance .i2{
		-webkit-box-flex: 1;
		box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		justify-content: space-between;
		-webkit-box-align: center;
		align-items: center;
		-webkit-align-items: center;
		padding-right: .2rem
	}
	
	.cart-list .item .append .insurance .i2 span{
		-webkit-box-flex: 1;
		flex: 1;
		-webkit-flex: 1;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		word-break: break-all;
		overflow: hidden;
		height: .5rem;
		line-height: .5rem;
		text-align: left
	}
	
	.cart-list .item .append .insurance .i2 em{
		font-style: normal;
		color: #ff5722
	}
	
	.cart-list .item .append .insurance .i3{
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		-webkit-align-items: center;
		width: .75rem;
		color: #ff5722
	}
	
	.cart-list .point-box{
		background: #fff
	}
	
	.cart-list .point-box .point{
		font-size: .22rem;
		color: #999;
		border-top: 1px solid #f6f6f6;
		padding: .2rem .3rem;
		text-align: left
	}
	
	.cart-list .point-box .point .act{
		border-radius: .04rem;
		color: #fff;
		padding: .02rem .06rem;
		margin-right: .1rem
	}
	
	.cart-list .point-box .point .act.act_gift{
		background: #5b77d6
	}
	
	.cart-list .point-box .point .act.act_special{
		background: #e53935
	}
	
	.cart-list .batch{
		background: #f6f6f6
	}
	
	.cart-list .batch .batch-item{
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		justify-content: space-between;
		padding: .12rem 0
	}
	
	.cart-list .batch .batch-img{
		width: 1rem;
		height: 1rem;
		border: 1px solid #eee;
		border-radius: 2px;
		margin: 0 .2rem 0 .6rem
	}
	
	.cart-list .batch .batch-img img{
		background: #fff;
		height: 100%;
		width: auto
	}
	
	.cart-list .batch .batch-name{
		-webkit-box-flex: 1;
		flex: 1;
		-webkit-flex: 1;
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		text-align: left;
		font-size: .24rem;
		line-height: .28rem;
		color: #666
	}
	
	.space-top{
		padding-bottom: .9rem
	}
	
	.bottom-submit{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: #fff;
		z-index: 99;
		box-shadow: 0 3px 14px 2px rgba(0, 0, 0, .12)
	}
	
	.bottom-submit .price-box{
		font-size: .26rem;
		color: #999;
		width: 100%;
		text-align: center;
		padding-top: .15rem
	}
	
	.bottom-submit .price-box strong{
		font-size: .4rem;
		color: #ff5722;
		margin-right: .2em
	}
	
	.bottom-submit .btn{
		display: block;
		width: 100%
	}
	
	.bottom-submit .black{
		color: #333
	}
	
	.bottom-submit .disable{
		background: #f4f4f4;
		border: 1px solid #f4f4f4
	}
	
	.bottom-submit .ui-button span{
		font-size: .3rem
	}
</style>