<template>
  <div class="event-box">
	<span><EventAssignToSector v-if="event.type == types.EVENT_ASSIGN_TO_SECTOR" :assignment="event"></EventAssignToSector></span>
	<span><button @click="delete_event()">X</button></span>
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
	methods: {
		delete_event () {
			this.$store.commit(types.DELETE_EVENT, {
				event_id: this.event.id,
			});
		},
	},
};


</script>


<style>
.event-box {
	display: flex;
}

.event-type-box {
	display: 10 0 auto;
}

.event-del-button {
	display: 1 0 auto;
}
</style>
