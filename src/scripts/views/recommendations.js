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
		var titleText = User.getCurrentUser() ? `${User.getCurrentUser().get('name')}, here are the recommendations you've received!` : ''
	 	return (
	 		<div className='favs-page'>
	 			<Banner />
	 			<h2 className="viewTitle">{titleText}</h2>
	 			<div className="loader"><img src="../../images/ring.gif" className="loading_icon" alt="loading icon" /></div>
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
		
		return(
			<div className='single-beer'>
				<h2>{this.props.beerModel.attributes.recommendingUser.name} recommended this beer!</h2>
				<h2>{this.props.beerModel.get('beerFave')? this.props.beerModel.get('beerFave').name:''}</h2>
				<button className='like' onClick={this.addToFavorites}>&hearts;</button>
				<h3>{this.props.beerModel.get('beerFave')? this.props.beerModel.get('beerFave').style.category.name: ''}</h3>

				<a className="detailsATag" href={`#beerDetails/${this.props.beerModel.get('beerFave')?this.props.beerModel.get('beerFave').id:''}`}>
					<img className="beerImage" src={this.props.beerModel.get('beerFave')?this.props.beerModel.get('beerFave').labels.medium:''}/>
				</a>
				<button className='delete' onClick={this.deleteFromRecommendations}>Ignore this Recommendation</button>
			</div>
		)
	}
})

export default Recommendations