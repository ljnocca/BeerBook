import Backbone from 'backbone'

const BeerModel = Backbone.Model.extend({
	
})

export var BeerCollection = Backbone.Collection.extend({
	url: '/proxy/brewery',
	model: BeerModel,
	parse: function(apiResponse){
		return apiResponse.data
	}
})