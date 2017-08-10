import _ from 'lodash';
import './style.css';
import Vue from 'vue';
import ShipList from './ship-list.vue';

// create a root instance
new Vue({
	el: '#ship-list',
	render: h => h(ShipList),
})
