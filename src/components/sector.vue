<template>
  <div>
	<!-- <div v-for="ship in sector.ships"> -->
	<!--   <ship ship="ship"></ship> -->
	  <!-- </div> -->
	<span>{{sector.name}}</span>
  </div>
</template>


<script>

export default {
	name: 'sector',
	components: {
	},
	props: {
		'sector': {
			type: Object,
			required: true,
		},
	},
};
</script>


<style>

</style>
