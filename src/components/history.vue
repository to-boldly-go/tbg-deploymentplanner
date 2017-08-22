<template>
  <div>
	<div><button @click="create_event()">Create Event</button></div>
	<div v-for="event in events">
	  <event :event="event"></event>
	</div>
  </div>
</template>


<script>

import { mapGetters } from 'vuex';
import Event from './event.vue';
import * as types from '../store/mutation-types';

export default {
	name: 'history',
	components: {
		Event,
	},
	computed: {
		...mapGetters({
			events: 'all_events',
		}),
	},
	methods: {
		create_event() {
			this.$store.commit(types.EVENT_ASSIGN_TO_SECTOR, {
				ship: {
					name: 'Ship A',
				},
				sector: {
					name: 'Sector X',
				},
				timestamp: 'Now!',
			});
		},
	},
};
</script>


<style>

</style>
