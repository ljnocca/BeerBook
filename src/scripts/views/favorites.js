import React from 'react'
import ACTIONS from './../actions.js'
import STORE from './../store.js'
import Banner from './components/banner.js'

const Favorites = React.createClass({
	componentWillMount:function(){
		ACTIONS.fetchFavoritesByUser(this.props.userId)
		STORE.on('dataUpdated', () => {
			this.setState(STORE.data)
		})
	},
	componentWillUnmount:function(){
		STORE.off('dataUpdated')
    },
	getInitialState: function() {
		return STORE.data
	},
	render: function() {
		console.log(this.props)
	 	return (
	 		<div className='favs-page'>
	 			<Banner />
	 			<h2>Your Favorites</h2>
	 			<Beers beerCollection={this.state.favCollection}/>
	 		</div>
	 	)
 	}
})

const Beers = React.createClass({
	makeBeers: function(model){
		return <Beer 
					beerModel={model}
					key={model.cid}
				/>
	},
	render: function() {
		console.log(this.props.beerCollection)
		return (
			<div className="beers">
				{this.props.beerCollection.map(this.makeBeers)}				
			</div>
			)
	}
})

const Beer = React.createClass({
	deleteFromFavorites: function(){
		ACTIONS.deleteFavorite(this.props.userId, this.props.beerModel)
	},

	recommendToUser: function(){
		ACTIONS.recommendBeer(this.props.beerModel)
	},

	render: function(){
		var beerName = this.props.beerModel.get('name')
		var beerStyle = this.props.beerModel.get('style')
		var beerLabel = this.props.beerModel.get('labels')
		var beerDescription = this.props.beerModel.get('description')
		var beerFoodPairing = this.props.beerModel.get('foodPairings')
		var beerOrganic = this.props.beerModel.get('isOrganic')
		var beerABV = this.props.beerModel.get('abv')
		var beerIBU = this.props.beerModel.get('ibu')
		var beerAvailability = this.props.beerModel.get('available')
		return(
			<div className='beerDiv'>
				<h2>{beerName}</h2>

				<button className='recommend' onClick={this.recommendToUser}>Recommend This Beer!</button>

				<h3>{beerStyle? beerStyle.category.name: ''}</h3>

				<img src={beerLabel ? this.props.beerModel.get('labels').medium : 'images/defaultBeer.jpg'}/>
				<h5>{beerABV ? `ABV: ${beerABV}%`: ''}</h5>
				<h5>{beerIBU ? `IBU: ${beerIBU}`: ''}</h5>

				<h3>{beerAvailability ? 'Availability': ''}</h3>
				<p>{beerAvailability ? beerAvailability.description : ''}</p>

				<h3>{beerDescription ? 'Beer Description': ''}</h3>
				<p>{beerDescription ? beerDescription: ''}</p>

				<h3>{beerFoodPairing? 'Food Pairings': ''}</h3>
				<p>{beerFoodPairing? beerFoodPairing: ''}</p>

				<p>{beerOrganic ? `Organic? ${beerOrganic}`: ''}</p>
				<button className='delete' onClick={this.deleteFromFavorites}>Remove From Favorites</button>
			</div>
		)
	}
})

export default Favorites