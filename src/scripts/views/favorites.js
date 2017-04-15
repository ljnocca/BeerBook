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
	 	return (
	 		<div className='favs-page'>
	 			<Banner />
	 			<h2>Your Favorites</h2>
	 			<Beers 
	 			beerCollection={this.state.favCollection}
	 			activeBeerID={this.state.activeBeerID}
	 			/>
	 		</div>
	 	)
 	}
})

const Beers = React.createClass({
	makeBeers: function(model){
		return <Beer 
					beerModel={model}
					activeBeerID={this.props.activeBeerID}
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

	handleClick: function(){
		ACTIONS.setActiveBeerID(this.props.beerModel.get('id'))
	},

	render: function(){
		console.log(this.props)
		var beerName = this.props.beerModel.get('name')
		var beerStyle = this.props.beerModel.get('style')
		var beerLabel = this.props.beerModel.get('labels')

		var beerDiv = 'single-beer'

		if(this.props.activeBeerID === this.props.beerModel.get('id')){
			beerDiv = 'active'
		}
		return(
			<div className={beerDiv}>
				<h2>{beerName}</h2>
				<button className='recommend' onClick={this.handleClick}>Recommend This Beer!</button>
				<h3>{beerStyle? beerStyle.category.name: ''}</h3>
				<img src={beerLabel ? this.props.beerModel.get('labels').medium : 'images/defaultBeer.jpg'}/>
				<button className='delete' onClick={this.deleteFromFavorites}>Remove From Favorites</button>


			</div>
		)
	}
})

export default Favorites