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
		var beerDetails=this.props.details

		var beerStyle = this.props.details.get('style')
		var beerLabel = this.props.details.get('labels')
		var beerAvailabilty = this.props.details.get('available')

		console.log(this.props.details)
			return (
				<div className="beerDetails">
					<h2 className="viewTitle">{`${beerDetails.get('name')} Details`}</h2>
					<div className='mainFacts'>
						<button className='like' onClick={this.addToFavorites}>&hearts;</button>
						<h3>{`Style: ${beerStyle.category.name}`}</h3>
						<h3>{`ABV: ${beerDetails.get('abv')}%`}</h3>
						<h3>{`IBU: ${beerDetails.get('ibu')}`}</h3>
					</div>
					<div className='details'>
						<div className='leftDetails'>
							<img src={beerLabel?beerLabel.large:'images/defaultBeer.jpg'} />
						</div>
						<div className='rightDetails'>
							<h3>{beerAvailabilty? `Availability`: ''}</h3>
							<p>{beerAvailabilty?beerAvailabilty.description:''}</p>

							<h3>{beerDetails.get('description')? `Description`: ''}</h3>
							<p>{beerDetails.get('description')? beerDetails.get('description'):''}</p>
						</div>
					</div>
				</div>
			)	
	}
})

export default BeerDetails

	