import _ from 'lodash';
import './style.css';
import Vue from 'vue';
import ShipList from './ship-list.vue';
import SectorList from './sector-list.vue';

var sectors = [
	{
		id: 1,
		name: "Sector 1",
		ships: [
			{
				'id': 1,
				'name': 'Ship A',
				'class': 'Class A',
			},
			{
				'id': 2,
				'name': 'Ship B',
				'class': 'Class B',
			},
			{
				'id': 3,
				'name': 'Ship C',
				'class': 'Class B',
			},
		],
	},
	{
		id: 2,
		name: "Sector 2",
		ships: [
			{
				'id': 4,
				'name': 'Ship D',
				'class': 'Class A',
			},
		],
	},
];

// create a root instance
new Vue({
	el: '#sector-list',
	render: h => h(SectorList, {
		props: {
			sectors: sectors,
		},
	}),
})
