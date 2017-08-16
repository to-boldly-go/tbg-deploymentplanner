import * as types from '../mutation-types';
import * as events from '../events'
import History from '../history'

const state = {
	all_events: History(),
};

const getters = {
	all_events: state => state.all_events,
};

const actions = {
};

const mutations = {
	[types.LOAD_EVENTS] (state, { events }) {
		state.all_events = events;
	},

	[types.DELETE_EVENT] (state, { event_id }) {
		delete state.all_events[event_id];
	},

	[types.EVENT_ASSIGN_TO_SECTOR] (state, payload) {
		state.all_events.add(types.EVENT_ASSIGN_TO_SECTOR, payload);
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
