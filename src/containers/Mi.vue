<template>
	<div class="app-shell app-shell-bottom-navigation">
		<router-view></router-view>
		<Xfooter />
	</div>
	
</template>

<script>
	
	import Xfooter from '../components/Xfooter.vue';
	
	export default {
		components: {
			Xfooter
		}
	}
</script>
