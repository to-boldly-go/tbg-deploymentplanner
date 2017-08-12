<template>
  <div class="sector-list-class" v-model="sector_data">
	<div v-for="sector in sector_data" :key="sector.id" class="sector-box-class">
	  <div class="drag-handle"></div>
	  <div class="sector-name-class">{{sector.name}}</div>
	  <ship-list :sector="sector"></ship-list>
	</div>
  </div>
</template>

<script>

import ShipList from './ship-list.vue';

import interact from 'interactjs'

interact('.sector-box-class')
	.draggable({
		inertia: false,
		snap: {
			targets: [
				interact.createSnapGrid({x: 30, y: 30})
			],
		},
		restrict: {
			restriction: "parent",
			// endOnly: true,
			elementRect: { top: 0, left: 0, bottom: 1, right: 1, },
		},
		onmove: dragMoveListener,
		onend: function (event) {
		},
	})
	.allowFrom('.sector-name-class');

function dragMoveListener(event) {
	var target = event.target,
		x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
		y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

	target.style.webkitTransform =
		target.style.transform =
		'translate(' + x + 'px, ' + y + 'px)';

	target.setAttribute('data-x', x);
	target.setAttribute('data-y', y);
};

// window.dragMoveListener = dragMoveListener;

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
};
</script>

<style>
.sector-list-class {
	/* take up the entire window */
	height: 100%;
	width: 100%;
	background-color: #111;
}

.sector-box-class {
	background-color: #29e;
	border: 2px solid #07a;
	width: 300px;
	border-radius: 5px;
	box-sizing: border-box;
	min-height: 30px;
}

.sector-name-class {
	font-size: 20;
	background-color: #17c;
	padding-bottom: 3px;
}

</style>
