<template>
  <div class="sector-list-class" v-model="sectors">
	<div class="sector-box-class" v-for="sector in sectors">
	  <ship-list :sector="sector"></ship-list>
	</div>
  </div>
</template>

<script>

import ship_list from './ship-list.vue';

export default {
	name: 'sector-list',
	props: {
		'sectors': {
			type: Array,
			required: true,
		},
	},
	components: {
		'ship-list': ship_list,
	},
}
</script>

<style>
.sector-list-class {
	display: flex;
	justify-content: space-around;
}

.sector-box-class {
	padding: 10;
}
</style>
