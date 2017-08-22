<template>
  <div>
	<div v-for="sector in sectors">
	  <Sector sector="sector"></Sector>
	</div>
  </div>
</template>


<script>

import Sector from './sector.vue';
import { mapGetters } from 'vuex';

export default {
	name: 'sector',
	components: {
		Sector,
	},
	computed: {
		...mapGetters({
			sectors: 'sectors',
		}),
	},
};
</script>


<style>

</style>
