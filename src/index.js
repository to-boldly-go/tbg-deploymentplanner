import _ from 'lodash';
import './style.css';

import Vue from 'vue';
import Vuex from 'vuex';

import store from './store';

import App from './components/app.vue';

// create a root instance
new Vue({
	el: '#app',
	store,
	render: h => h(App),
})
