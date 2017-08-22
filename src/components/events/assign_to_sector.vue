<template>
  <div>
	<span>{{assignment.timestamp}}:</span>
	<span>{{assignment.ship.name}} assigned to {{assignment.sector.name}}</span>
  </div>
</template>


<script>

export default {
	name: 'EventAssignToSector',
	props: {
		assignment: {
			type: Object,
			required: true,
		},
	},
	components: {
	},
};

</script>


<style>

</style>
