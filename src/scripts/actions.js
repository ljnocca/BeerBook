import STORE from './store.js'
import {BeerCollection} from './models/beerCollection.js'
import config from './../../config/secrets.js'
import User from './models/userModel.js'

var beerKey = config.key

var ACTIONS = {
	searchBeer:function(searchString){
		var beerInstance = new BeerCollection()
		var promise = beerInstance.fetch({

			data:{
                'key' : beerKey,
                'q' : searchString
			}
		})

		promise.then(()=>{
			STORE.set({
				beerCollection: beerInstance
			})
		})
	},
	logout: function() {
		User.logout()
			.done(
				function(resp) {
					alert('you logged out!')
					location.hash = 'login'
				})
			.fail(
				function(err) {
					alert('error logging out!')
					console.log(err)
				})
	},
	logUserIn: function(email,password) {
		User.login(email,password)
			.done(
				function(resp) {
					alert('logged in!')
					console.log(resp)
					location.hash = 'profile'
				})
			.fail(
				function(err) {
					alert('problem logging in!')
					console.log(err)
				})
	},
	registerUser: function(userData) {
		User.register(userData)
			.done(
				function(resp) {
					alert(`new user ${resp.email} registered`)
					console.log(resp)
					ACTIONS.logUserIn(userData.email, userData.password)
				})
			.fail(
				function(err) {
					alert('problem registering user!')
					console.log(err)
				})
	}
}

export default ACTIONS