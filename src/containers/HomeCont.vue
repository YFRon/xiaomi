<template>
	<div>
		<Xheader :status="bodyRouter" />
		<Xheader2 :status="bodyRouter" />
		<Xbody :status="bodyRouter" />
		<Xbody2 :status="bodyRouter" />
		<Xbody3 :status="bodyRouter" />
		<Xbody4 :status="bodyRouter" />
	</div>
	
</template>

<script>
	
	import Xheader from '../components/Xheader.vue';
	import Xheader2 from '../components/Xheader2.vue';
	import Xbody from '../components/Xhome_body.vue';
	import Xbody2 from '../components/Xcategory_body.vue';
	import Xbody3 from '../components/Xcart_body.vue';
	import Xbody4 from '../components/Xuser_body.vue';
	
	export default{
		data(){
			return {bodyRouter:""}
		},
		components:{
			Xheader,
			Xheader2,
			Xbody,
			Xbody2,
			Xbody3,
			Xbody4
		},
		methods:{
			showBody(){
				var router = this.$router.history.current.path;
				switch(router){
					case '/mi/home':
						this.bodyRouter = "home";
						break;
					case '/mi/category':
						this.bodyRouter = "category";
						break;
					case '/mi/cart':
						this.bodyRouter = "cart";
						break;
					case '/mi/user':
						this.bodyRouter = "user";
						break;
					default:
						this.bodyRouter = "";
						break;
				}
			}
		},
		mounted(){
			this.showBody();
		},
		watch:{
			$route(){
				this.showBody();
			}
		}
	}
	
</script>
