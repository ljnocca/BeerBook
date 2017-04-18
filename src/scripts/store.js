import Backbone from 'backbone'
import {BeerCollection,BeerModel} from './models/beerCollection.js'
import {FavoritesCollection} from './models/beerCollection.js'
import {RecommendationCollection} from './models/beerCollection.js'
import {UserCollection, UserModel} from './models/beerCollection.js'


var STORE = Object.assign({}, Backbone.Events, {
	data:{
		beerCollection: new BeerCollection(),
		beerModel: new BeerModel(),
		favCollection: new FavoritesCollection(),
		recommendationsCollection: new RecommendationCollection(),
		userCollection: new UserCollection(),
		userModel: new UserModel(),
		modalShowing: false,
		recommendBeer: new BeerModel()
	},
	data_default:{
		beerCollection: new BeerCollection(),
		beerModel: new BeerModel(),
		favCollection: new FavoritesCollection(),
		recommendationsCollection: new RecommendationCollection(),
		userCollection: new UserCollection(),
		userModel: new UserModel(),
		modalShowing: false,
		recommendBeer: new BeerModel()
	},
	get: function(prop) {
		if (this.data[prop] === undefined) {
			throw new Error('the store doesn\'t have a property called ' + prop)
		}
		return this.data[prop]
	},
	reset: function(){
		this.data = this.data_default
		this.trigger('dataUpdated')
	},

	set: function(attributes) {
		this.data = Object.assign(this.data, attributes)
		this.trigger('dataUpdated')
	}
})

export default STORE