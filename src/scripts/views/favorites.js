import React from 'react'
import ACTIONS from './../actions.js'
import STORE from './../store.js'
import Banner from './components/banner.js'
import RecommendationModal from './components/recommendationModal.js'

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
		console.log('favcoll',this.state.favCollection)
		var titleText = User.getCurrentUser() ? `${User.getCurrentUser().get('name')}, these are your favorite beers!` : ''
	 	return (
	 		<div className='favs-page'>
	 			<Banner />
	 			<h2 className="viewTitle">{titleText}</h2>
		 		<RecommendationModal />
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
		return (
			<div className="beers">
				{this.props.beerCollection.map(this.makeBeers)}	
			</div>
			)
	}
})

const Beer = React.createClass({
	handleClick: function() {
		ACTIONS.showModal(this.props.beerModel)
	},
	deleteFromFavorites: function(){
		ACTIONS.deleteFavorite(User.getCurrentUser().get('_id'), this.props.beerModel)
	},
	render: function(){
		console.log(this.props.beerModel)
		var beerName = this.props.beerModel.get('name')
		var beerStyle = this.props.beerModel.get('style')
		var beerLabel = this.props.beerModel.get('labels')

		return(
			<div className='single-beer'>
				<h2>{beerName}</h2>
				<h3>{beerStyle? beerStyle.category.name: ''}</h3>
				<a className="detailsATag" href={`#beerDetails/${this.props.beerModel.get('id')}`}>
					<img className="favoritesImg" src={beerLabel ? this.props.beerModel.get('labels').medium : 'images/defaultBeer.jpg'}/>
				</a>
				<button className='recommend' onClick={this.handleClick}>Recommend this beer!</button>
				<button className='delete' onClick={this.deleteFromFavorites}>Remove from favorites</button>
			</div>
		)
	}
})



export default Favorites