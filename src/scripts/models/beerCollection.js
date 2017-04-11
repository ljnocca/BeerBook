import Backbone from 'backbone'

export var FavModel = Backbone.Model.extend({
	urlRoot: '/api/favorites',
	idAttribute: '_id'
})

export var FavoritesCollection = Backbone.Collection.extend({
	comparator: function(mod) {
		return new Date(mod.get('createdAt')).getTime() * -1
	},
	model: FavModel,
	url: '/api/favorites'
})

//*****************************************

export var BeerModel = Backbone.Model.extend({
	urlRoot: '/api/favorites',
	idAttribute: '_id'
})

export var BeerCollection = Backbone.Collection.extend({
	url: '/proxy/brewery',
	model: BeerModel,
	parse: function(apiResponse){
		return apiResponse.data
	}
})