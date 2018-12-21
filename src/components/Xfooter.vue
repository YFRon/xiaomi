<template>
	<footer class="app-bottom-navigator-wrapper app-shell-footer">
		<div class="fill-height box-flex align-center">
			<a class="flex" v-for="(n,index) in navs" :key="index" :class="{on:tab===index}" @click="chose(index)"><i class="image-icons app-bottom-icon" :class="n.icon"></i><span>{{n.title}}</span>
			</a>
		</div>
		<div class="safe-area-inset"></div>
	</footer>
</template>

<script>
	export default {
		data() {
			return {
				tab: 0
			}
		},
		methods: {
			chose(index) {
				this.$router.push({
					name: this.navs[index].path
				});
				this.tab = index;
			},
			setChannel(){
				var route = this.$router.history.current.path;
				switch(route) {
					case "/mi/home":
						this.tab = 0;
						break;
					case "/mi/category":
						this.tab = 1;
						break;
					case "/mi/cart":
						this.tab = 2;
						break;
					case "/mi/user":
						this.tab = 3;
						break;
					default:
						this.tab = 0;
				}
			}
		},
		computed: {
			navs() {
				return this.$store.getters.getNavs;
			}
		},
		mounted() {
			this.setChannel()
		},
		watch:{
			$route(){
				this.setChannel();
			}
		}
	}
</script>
