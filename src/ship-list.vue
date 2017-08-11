<template>
  <div class="sector">
	<div class="sector-name">{{sector.name}}</div>
	<draggable v-model="sector.ships" :options="draggable_options" @start="drag=true" @end="drag=false">
	  <div v-for="ship in sector.ships">
		<span class="ship-name">{{ship.name}}</span>
		<span class="ship-class">({{ship.class}})</span>
	  </div>
	</draggable>
  </div>
</template>

<script>

import draggable from 'vuedraggable';

export default {
	name: 'ship-list',
	props: {
		'sector': {
			type: Object,
			required: true,
		},
	},
	components: {
		'draggable': draggable,
	},
	computed: {
		// sector_name: () => {
		// 	return this.sector.name;
		// },
		// ships: () => {
		// 	return this.sector.ships;
		// },
		draggable_options: () => {
			return { group: "ships-draggable-group" };
		},
	},
};
</script>

<style>
.ship-name {
	font-weight: bold;
}

.ship-class {
}

.sector-name {
	font-size: 20;
}
</style>

