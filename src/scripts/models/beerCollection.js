import Backbone from 'backbone'

export var BeerCollection = Backbone.Collection.extend({
	url: '/proxy/brewery',
	parse: function(apiResponse){
		return apiResponse.data
	}
})