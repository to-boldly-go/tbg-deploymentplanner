import * as types from '../mutation-types';
import _ from 'lodash';

const state = {
	all_timestamps: [],
};

const getters = {
	all_timestamps: state => state.all_timestamps,
};

const actions = {
};

const mutations = {
	[types.LOAD_TIMESTAMPS] (state, { timestamps }) {
		state.all_timestamps = timestamps;
	},

	[types.DELETE_TIMESTAMP] (state, { timestamp }) {
		_.remove(state.all_timestamps, (ts, idx, ar) => (ts === timestamp));
		// TODO: update events!
	},

	[types.EVENT_NEW_TIMESTAMP] (state, payload) {
		if (_.indexOf(state.all_timestamps, payload.timestamp) !== -1) {
			// no dupes allowed!
			return;
		}
		const idx = _.indexOf(state.all_timestamps, payload.after);
		state.all_timestamps.splice(idx + 1, 0, payload.timestamp);
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
