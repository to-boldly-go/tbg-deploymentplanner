<template>
  <div>
	<div class="sector-name-class">{{sector.name}}</div>
	<draggable v-model="ships_data" :options="draggable_options" @start="drag=true" @end="drag=false">
	  <div v-for="ship in ships_data" :key="ship.id" class="ship-list-box-class">
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
	data () {
		return {
			ships_data: this.sector.ships,
		}
	},
	computed: {
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

