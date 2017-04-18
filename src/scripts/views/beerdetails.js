import React from 'react'
import ACTIONS from './../actions.js'
import STORE from './../store.js'
import Banner from './components/banner.js'

const BeerDetails = React.createClass({
	componentWillMount:function(){
		ACTIONS.fetchBeerByID(this.props.beerID)
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
		console.log('model',this.state.beerModel)
	 	return (
	 		<div>
	 			<Banner />
	 			<div>
		 			<Details details={this.state.beerModel} />
				</div>
	 		</div>
	 	)
 	}
})


const Details = React.createClass({
	addToFavorites: function(){
		ACTIONS.addFavorite(this.props.details.get('data'))
	},
	render: function() {
		var beerDetails=this.props.details.attributes
		console.log(this.props.details)
			return (
				<div className="beerDetails">
					<h2>{beerDetails ? `${beerDetails.name} Details`:''}</h2>
					<div className='mainFacts'>
						<button className='like' onClick={this.addToFavorites}>&hearts;</button>
						<h3>{beerDetails ? `Style: ${beerDetails.style.category.name}`:''}</h3>
						<h3>{beerDetails ? `ABV: ${beerDetails.abv}%`:''}</h3>
						<h3>{beerDetails ? `IBU: ${beerDetails.ibu}`:''}</h3>
					</div>
					<div className='details'>
						<div className='leftDetails'>
							<img src={beerDetails?beerDetails.labels.large:'images/defaultBeer.jpg'} />
						</div>
						<div className='rightDetails'>
							<h3>{beerDetails.available.description? `Availability`: ''}</h3>
							<p>{beerDetails?beerDetails.available.description:''}</p>

							<h3>{beerDetails.description? `Description`: ''}</h3>
							<p>{beerDetails?beerDetails.description:''}</p>
						</div>
					</div>
				</div>
			)	
	}
})

export default BeerDetails