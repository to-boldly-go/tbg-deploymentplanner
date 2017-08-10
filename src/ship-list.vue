<template>
  <div class="sector_list">
	<!-- <div id="ship_list" class="ship-list" v-model="ship_array"> -->
	  <draggable" v-model="ship_array_1" @start="drag=true" @end="drag=false">
		<div v-for="ship in ship_array_1">
		  <span class="ship-name">#{{ship.name}}</span>
		  <span class="ship-class">#{{ship.class}}</span>
		</div>
	  </draggable>

	  <draggable v-model="ship_array_2" @start="drag=true" @end="drag=false">
		<div v-for="ship in ship_array_2">
		  <span class="ship-name">#{{ship.name}}</span>
		  <span class="ship-class">#{{ship.class}}</span>
		</div>
	  </draggable>
	  <!-- </div> -->
  </div>
</template>

<script>
	import draggable from 'vuedraggable';

export default {
	name: 'ship-list',
	components: {
		'draggable': draggable,
	},
	data () {
		return {
			ship_array_1: [
				{
					'name': 'Ship A',
					'class': 'Class A',
				},
				{
					'name': 'Ship B',
					'class': 'Class B',
				},
				{
					'name': 'Ship C',
					'class': 'Class B',
				},
			],
			ship_array_2: [
				{
					'name': 'Ship D',
					'class': 'Class A',
				},
			],
		}
	}
};
</script>

<style>
.ship-name {
	font-weight: bold;
}

.ship-class {
}
</style>

