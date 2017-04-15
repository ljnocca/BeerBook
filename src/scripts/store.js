import Backbone from 'backbone'
import {BeerCollection,BeerModel} from './models/beerCollection.js'
import {FavoritesCollection} from './models/beerCollection.js'
import {RecommendationCollection} from './models/beerCollection.js'


var STORE = Object.assign({}, Backbone.Events, {
	data:{
		beerCollection: new BeerCollection(),
		beerModel: new BeerModel(),
		favCollection: new FavoritesCollection(),
		recommendationsCollection: new RecommendationCollection(),
		activeBeerID: ''
	},
	get: function(prop) {
		if (this.data[prop] === undefined) {
			throw new Error('the store doesn\'t have a property called ' + prop)
		}
		return this.data[prop]
	},

	set: function(attributes) {
		this.data = Object.assign(this.data, attributes)
		this.trigger('dataUpdated')
	}
})

export default STORE