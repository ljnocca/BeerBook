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
	render: function() {
		var beerDetails=this.props.details.get('data')

			return (
				<div className="beers">
					<h2>{beerDetails?`${beerDetails.name} Details`:''}</h2>
					<h5>{beerDetails?beerDetails.style.category.name:''}</h5>
					<p>{beerDetails?beerDetails.abv:''}</p>
					<p>{beerDetails?beerDetails.ibu:''}</p>
					<img src={beerDetails?beerDetails.labels.large:''} />
					<p>{beerDetails?beerDetails.available.description:''}</p>
					<p>{beerDetails?beerDetails.description:''}</p>
				</div>
			)	
	}
})

export default BeerDetails