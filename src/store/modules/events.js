import * as types from '../mutation-types';
import _ from 'lodash';

const state = {
	all_events: [],
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
		state.all_events = state.all_events.filter(ev => (ev.id !== event_id))
	},

	[types.EVENT_ASSIGN_TO_SECTOR] (state, payload) {
		const new_id = Math.max(...state.all_events.map(ev => ev.id), 0) + 1;
		state.all_events.push({
			id: new_id,
			type: types.EVENT_ASSIGN_TO_SECTOR,
			...payload,
		});
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
