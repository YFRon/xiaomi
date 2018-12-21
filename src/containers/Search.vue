<template>
	<div>
		<Xheader />
		<Xbody />
	</div>
</template>

<script>
	import Xheader from "../components/Xheader_search.vue";
	import Xbody from "../components/Xsearch_body.vue";
	
	export default{
		components:{
			Xheader,
			Xbody
		}
	}
</script>
