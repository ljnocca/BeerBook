import Backbone from 'backbone'

export var FavModel = Backbone.Model.extend({
	urlRoot: '/api/favorites',
	idAttribute: '_id'
})

export var FavoritesCollection = Backbone.Collection.extend({
	comparator: function(mod) {
		return new Date(mod.get('createdAt')).getTime() * -1
	},
	url: '/api/favorites',
	model: FavModel
})

//*****************************************

export var BeerModel = Backbone.Model.extend({
	url: '/proxy/brewery',
	defaults: {
		style: {
			category: {
				name: ''
			}
		},
		abv:'',
		available:{
			description:''
		},
		description:'',
		ibu:'',
		labels:{
			icon: 'images/defaultBeer.jpg',
			large: 'images/defaultBeer.jpg',
			medium: 'images/defaultBeer.jpg'
		},
		name: ''
	},
	parse: function(rawResponse) {
		return rawResponse.data ? rawResponse.data : rawResponse
	}
})

export var BeerCollection = Backbone.Collection.extend({
	url: '/proxy/brewery',
	model: BeerModel,
	parse: function(apiResponse){
		return apiResponse.data
	}
})

//*****************************************

export var UserModel = Backbone.Model.extend({
	urlRoot: 'api/users/',
	idAttribute: '_id'
})

export var UserCollection = Backbone.Collection.extend({
	url: '/api/users',
	model: UserModel
})

//*****************************************

export var RecommendationModel = Backbone.Model.extend({
	urlRoot: '/api/recommendations',
	idAttribute: '_id'
})

export var RecommendationCollection = Backbone.Collection.extend({
	comparator: function(mod) {
		return new Date(mod.get('createdAt')).getTime() * -1
	},
	url:'/api/recommendations',
	model: RecommendationModel
})

// invoke: ACTION that does what justin wrote below, passing in target user id and beerfave id....

// var newRec = new RecommendationModel({
// 	recommendingUser: User.getCurrentUser().get("_id"),
// 	targetUser: TARGET USER'S ID FROM WHEREVER YOU GET THAT,
// 	beerFave: ID OF A BEER YOUVE SELECTED FROM YOUR FAVORITE LIST IN THE UI LEADING UP TO THIS POINT.
// })

// newRec.save().then( etc... )