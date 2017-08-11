import _ from 'lodash';
import './style.css';
import Vue from 'vue';
import ShipList from './ship-list.vue';
import SectorList from './sector-list.vue';

// create a root instance
new Vue({
	el: '#sector-list',
	render: h => h(SectorList, {
		props: {
			sectors: [
				{
					name: "Sector 1",
					ships: [
						{
							'name': 'Ship A',
							'class': 'Class A',
						},
						{
							'name': 'Ship B',
							'class': 'Class B',
						},
						{
							'name': 'Ship C',
							'class': 'Class B',
						},
					],
				},
				{
					name: "Sector 2",
					ships: [
						{
							'name': 'Ship D',
							'class': 'Class A',
						},
					],
				},
			],
		},
	}),
})
