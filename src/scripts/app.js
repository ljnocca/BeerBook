import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

import STORE from './store.js'

import Recommendations from './views/recommendations.js'
import Favorites from './views/favorites.js'
import Login from './views/login.js'
import Pub from './views/pub.js'
import Search from './views/search.js'
import BeerFacts from './views/beerFacts.js'



const app = function() {
  var BeerRouter = Backbone.Router.extend({
  	routes:{
      'favorites/user/:id': 'showFavorites',
  		'recommendations': 'showRecommendations',
  		'login':'showLoginPage',
  		'pub': 'showProfile',
  		'search': 'showSearch',
      'learn': 'showBeerFacts',
  		'*default': 'handleRedirect'
  	},
    showFavorites: function(id){
      ReactDOM.render(<Favorites userId={id}/> ,document.querySelector('.container'))
    },
  	showRecommendations: function(){
  		ReactDOM.render(<Recommendations /> ,document.querySelector('.container'))
  	},
  	showLoginPage: function(){
  		ReactDOM.render(<Login /> ,document.querySelector('.container'))
  	},
  	showPub: function(){
  		ReactDOM.render(<Pub /> ,document.querySelector('.container'))
  	},
  	showSearch: function(){
  		ReactDOM.render(<Search /> ,document.querySelector('.container'))
  	},
    showBeerFacts: function(){
      ReactDOM.render(<BeerFacts />, document.querySelector('.container'))
    },
  	handleRedirect: function(){
  		location.hash = 'login'
  	}
  })
  new BeerRouter
  Backbone.history.start()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..