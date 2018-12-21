<template>

	<div data-v-bc186c1a="" class="container app-view app-view-with-header app-view-with-footer" v-if="status==='category'" style="padding-top: 50px;">
		<div class="list-navbar">
			<ul data-v-06d70f2d="">
				<li class="navs" @click="selectNav(index)" :key="index" v-for="(n,index) in data" :class="{active:nav===index}">
					<a><span data-v-06d70f2d="">{{n.nav_name}}</span></a>
				</li>
			</ul>
		</div>
		<div class="list-wrap">
			<div class="list-item" v-for="(n,index) in data" :key="index" :class="'category'+index">
				<div class="component-list-main">
					<div class="cells_auto_fill" index="0">
						<a class="exposure items" style="width: 5rem; height: 2rem;"><img :src="n.img_url" lazy="loaded" style="height: 2rem; width: 5rem;"></a>
					</div>
					<div v-for="(m,idx) in n.category" :key="idx">
						<div class="category_title"><span>{{m.name}}</span></div>
						<div class="category_group box-flex" index="2">
							<div class="box">
								<div class="product" v-for="(l,index) in m.items" :key="index" @click="toDetail(l.good_id)">
									<a class="exposure item">
										<div class="img">
											<img class="big" :src="l.good_img" lazy="loaded" style="width: 1.2rem; height: 1.2rem;">
										</div>
										<div class="name">{{l.good_name}}</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	import axios from "axios";
	import $ from "jquery";

	window.$ = $;

	export default {
		props: ["status"],
		data() {
			return {
				data: [],
				nav: 0,
				scroll:''
			}
		},
		methods: {
			toDetail(data) {
				this.$router.push({
					name: "details",
//					query:{
//						id:data
//					}
					params: {
						id: data
					}
				});
			},
			selectNav(index) {
				this.nav = index;
				let jump = document.getElementsByClassName('list-item');
				let total = jump[index].offsetTop;
				$(document).scrollTop(total);
			},
			dataScroll() {
				this.scroll = $(document).scrollTop();
			},
			loadSroll() {
				var $navs = $(".navs");
				var sections = document.getElementsByClassName('list-item');
				for(var i = sections.length - 1; i >= 0; i--) {
					if(this.scroll >= sections[i].offsetTop) {
						//sections[i].offsetTop这个模块离顶部的距离
						$navs.eq(i).addClass("active").siblings().removeClass("active")
						break;
					}
				}
			}
		},
		watch: {
			scroll() {
				this.loadSroll()
			}
		},
		mounted() {
			var self = this;
//			axios.get("http://47.107.156.61/category/")
			axios.get("./goodsList.json")
				.then(function(response) {
					self.data = response.data.data;
				})
				.catch(function(error) {
					throw error;
				});
			window.addEventListener('scroll', this.dataScroll);
		}
	}
</script>