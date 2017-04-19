import React from 'react'
import ACTIONS from './../actions.js'
import STORE from './../store.js'
import Banner from './components/banner.js'
import User from './../models/userModel.js'

const Recommendations = React.createClass({
	componentWillMount:function(){
		ACTIONS.fetchRecommendationsbyID(User.getCurrentUser().get('_id'))
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
	 			<h2 className="viewTitle">Here are the Recommendations you've received!</h2>
	 			<Beers beerCollection={this.state.recommendationsCollection}/>
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
		return (
			<div className="beers">
				{this.props.beerCollection.models.map(this.makeBeers)}				
			</div>
			)
	}
})

const Beer = React.createClass({
	addToFavorites: function(){
		ACTIONS.addFavorite(this.props.beerModel)
	},
	deleteFromRecommendations: function(){
		ACTIONS.deleteRecommendation(User.getCurrentUser().get('_id'), this.props.beerModel)
	},
	render: function(){
		console.log(this.props.beerModel)

		var beerName = this.props.beerModel.get('beerFave').name
		var beerStyle = this.props.beerModel.get('beerFave').style
		var beerLabel = this.props.beerModel.get('beerFave').labels
		
		return(
			<div className='single-beer'>
				<h2>{this.props.beerModel.attributes.recommendingUser.name} recommended this beer!</h2>
				<h2>{beerName}</h2>
				<button className='like' onClick={this.addToFavorites}>&hearts;</button>
				<h3>{beerStyle? beerStyle.category.name: ''}</h3>

				<a className="detailsATag" href={`#beerDetails/${this.props.beerModel.get('beerFave').id}`}>
					<img className="beerImage" src={beerLabel ? this.props.beerModel.get('beerFave').labels.medium : 'images/defaultBeer.jpg'}/>
				</a>
				<button className='delete' onClick={this.deleteFromRecommendations}>Ignore this Recommendation</button>
			</div>
		)
	}
})

export default Recommendations