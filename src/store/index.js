import Vue from 'vue';
import Vuex from 'vuex';

import events from './modules/events';
import timestamps from './modules/timestamps';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
	actions: {
	},
	getters: {
	},
	modules: {
		events,
		timestamps,
	},
	strict: debug,
});
