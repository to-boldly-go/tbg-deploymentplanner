<template>
  <div class="timestamp-box">
	<div><button @click="create_event()">New Event at {{timestamp}}</button></div>
	<div v-for="event in events">
	  <event :event="event"></event>
	</div>
  </div>
</template>


<script>

import { mapGetters } from 'vuex';
import Event from './event.vue';
import * as types from '../store/mutation-types';
import _ from 'lodash';

export default {
	name: 'history',
	props: {
		timestamp: {
			type: String,
			required: true,
		},
	},
	components: {
		Event,
	},
	computed: {
		events () {
			return this.$store.getters.all_events.filter((ev, idx, ar) => (ev.timestamp === this.timestamp));
		},
		// ...mapGetters({
		// 	all_events: 'all_events',
		// }),
	},
	methods: {
		create_event () {
			this.$store.commit(types.EVENT_ASSIGN_TO_SECTOR, {
				ship: {
					name: 'Ship A',
				},
				sector: {
					name: 'Sector X',
				},
				timestamp: this.timestamp,
			});
		}
	},
};
</script>


<style>
.timestamp-box {
	border-bottom: 2px solid #07a;
	min-height: 50px;
	padding: 0;
	margin: 0;
}
</style>
