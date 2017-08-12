<template>
  <div class="sector-list-class" v-model="sector_data">
	<div v-for="sector in sector_data" :key="sector.id" class="sector-box-class">
	  <ship-list :sector="sector"></ship-list>
	</div>
  </div>
</template>

<script>

import ShipList from './ship-list.vue';

export default {
	name: 'sector-list',
	props: {
		'sectors': {
			type: Array,
			required: true,
		},
	},
	components: {
		ShipList,
	},
	data () {
		return {
			sector_data: this.sectors,
		}
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
