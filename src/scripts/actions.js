import STORE from './store.js'
import {BeerCollection} from './models/beerCollection.js'
import {FavModel} from './models/beerCollection.js'
import config from './../../config/secrets.js'
import User from './models/userModel.js'

toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

var beerKey = config.key

var ACTIONS = {
	addFavorite: function(beerData){
		beerData.set({
			userName: User.getCurrentUser().get('name'),
			userId: User.getCurrentUser().get('_id')
		})
		var newFav = new FavModel(beerData.attributes)
		newFav.save()
			.then(
				function(response) { // SUCCESS
					toastr.success('Your beer has been saved as a favorite!')
				},
				function(err) { // FAILURE
					toastr.error('Problem saving your favorite!')
					console.log(err)
				}
			)
	},
	deleteFavorite: function(userId, beerModel){
		beerModel.destroy()
			.done(ACTIONS.fetchFavoritesByUser(userId))
			.fail(
				function(err){
					toastr.error('Problem deleting your beer!')
					console.log(err)
				})

	},
	fetchFavoritesByUser: function(inputID){
		var beerColl = STORE.get('favCollection')
		beerColl.fetch({
			data: {
				userId: inputID
			}
		})
			.then(function(){
				STORE.set({
					favCollection: beerColl
				})
			})

	},
	searchBeer:function(searchString){
		var beerInstance = new BeerCollection()
		var promise = beerInstance.fetch({
			data:{
                'key' : beerKey,
                'q' : searchString,
                'type': 'beer'
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
					toastr.info('You logged out!')
					location.hash = 'login'
				})
			.fail(
				function(err) {
					toastr.error('Error logging out!')
					console.log(err)
				})
	},
	logUserIn: function(email,password) {
		User.login(email,password)
			.done(
				function(resp) {
					toastr.success(`${resp.email} logged in!`)
					console.log(resp)
					location.hash = 'search'
				})
			.fail(
				function(err) {
					toastr.error('Problem logging in!')
					console.log(err)
				})
	},
	registerUser: function(userData) {
		User.register(userData)
			.done(
				function(resp) {
					console.log(resp)
					ACTIONS.logUserIn(userData.email, userData.password)
				})
			.fail(
				function(err) {
					toastr.error('Problem registering user!')
					console.log(err)
				})
	},
	recommendBeer: function(beerModel){

	}
}

export default ACTIONS