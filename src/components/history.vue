<template>
  <div class="history-box">
	<div>
	  <button @click="create_timestamp()">New Timestamp</button>
	  <input id="new_timestamp_input" type="text"></input>
	</div>
	<div v-for="timestamp in timestamps">
	  <timestamp :timestamp="timestamp"></timestamp>
	</div>
  </div>
</template>


<script>

import { mapGetters } from 'vuex';
import Timestamp from './timestamp.vue';
import * as types from '../store/mutation-types';
import _ from 'lodash';

export default {
	name: 'history',
	components: {
		Timestamp,
	},
	computed: {
		...mapGetters({
			events: 'all_events',
			timestamps: 'all_timestamps',
		}),
	},
	methods: {
		create_timestamp () {
			this.$store.commit(types.EVENT_NEW_TIMESTAMP, {
				timestamp: document.getElementById('new_timestamp_input').value,
				after: this.timestamps[this.timestamps.length - 1]
			});
		},
	},
};
</script>


<style>
.history-box {
	background-color: #29e;
	border: 2px solid #07a;
	width: 300px;
	margin: 15px;
	box-sizing: border-box;
	min-height: 30px;
}
</style>
