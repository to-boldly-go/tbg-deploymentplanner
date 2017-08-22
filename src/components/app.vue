<template>
  <div>
	<!-- <ControlPanel></ControlPanel> -->
	<History></History>
	<!-- <Sectors></Sectors> -->
  </div>
</template>


<script>

import ControlPanel from './control_panel.vue';
import History from './history.vue';
import Sectors from './sectors.vue';

export default {
	name: 'app',
	components: {
		ControlPanel,
		History,
		Sectors,
	},
};

</script>


<style>

</style>
