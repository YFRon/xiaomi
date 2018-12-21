import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Vuex from 'vuex'
Vue.use(Vuex)

import Mint from 'mint-ui'
Vue.use(Mint)

import Home from './containers/Mi.vue';
import Search from './containers/Search.vue';
import Comment from './containers/Comment.vue';
import Reg from './containers/Reg.vue';
import Details from './containers/Details.vue';

import HomeCont from "./containers/HomeCont.vue";

const routes = [{
		path: '/mi',
		name: 'mi',
		component: Home,
		children:[{
				path:"home",
				name:"home",
				component:HomeCont
			},{
				path:"category",
				name:"category",
				component:HomeCont
			},{
				path:"cart",
				name:"cart",
				component:HomeCont
			},{
				path:"user",
				name:"user",
				component:HomeCont
			},]
		},{
			path:"/search",
			name:"search",
			component:Search
		},{
			path:"/comment",
			name:"comment",
			component:Comment
		},{
			path:"/reg",
			name:"reg",
			component:Reg
		},{
			path:"/details/:id",
			name:"details",
			component:Details
		},{
			path: '/',
			redirect: '/mi/home'
		}]

const router = new VueRouter({
	routes
})

const store = new Vuex.Store({
	state:{
		navs:[{
			title:"首页",
			icon:"icon-home",
			path: "home"
		},{
			title:"分类",
			icon:"icon-category",
			path:"category"
			
		},{
			title:"购物车",
			icon:"icon-cart",
			path:"cart"
		},{
			title:"我的",
			icon:"icon-user",
			path:"user"
		}],
		nav:0
		
		
//		goods:[]
	},
	mutations:{
		editNav(state,data){
			state.nav = data;
		},
//		addGoods(state,data){
//			state.goods.push(data);
//		}
	},
	actions:{
		setNav(context,data){
			context.commit('editNav',data);
		},
//		setGoods(context,data){
//			context.commit('addGoods',data)
//		}
	},
	getters:{
		getNavs:state => {
			return state.navs;
		},
		getNav:state => {
			return state.nav;
		}
	}
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
