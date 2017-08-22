<template>
  <div>
	<EventAssignToSector v-if="event.type == types.EVENT_ASSIGN_TO_SECTOR" :assignment="event"></EventAssignToSector>
  </div>
</template>


<script>

import EventAssignToSector from './events/assign_to_sector.vue';
import { mapGetters } from 'vuex';
import * as types from '../store/mutation-types';

export default {
	name: 'event',
	components: {
		EventAssignToSector,
	},
	props: {
		'event': {
			type: Object,
			required: true,
		},
	},
	computed: {
		types: () => {
			return types;
		},
	},
};


</script>


<style>

</style>
