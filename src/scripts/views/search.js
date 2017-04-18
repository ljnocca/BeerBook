import React from 'react'
import ACTIONS from './../actions.js'
import STORE from './../store.js'
import Banner from './components/banner.js'

import User from './../models/userModel.js'

var welcomeText = User.getCurrentUser() ? `Welcome ${User.getCurrentUser().get('name')}! Search for a beer!` : ''

const Search = React.createClass({
	componentWillMount:function(){
		STORE.on('dataUpdated', () => {
			this.setState(STORE.data)
		})
	},
	componentWillUnmount:function(){
		STORE.off('dataUpdated')
		STORE.reset()
    },
	getInitialState: function() {
		return STORE.data
	},
	_handleSubmit: function(evtObj) {
		evtObj.preventDefault()
		var formEl = evtObj.target

		ACTIONS.searchBeer(formEl.beerSearch.value)
	},
	render: function() {

	 	return (
	 		<div className='search-page'>
	 			<Banner />
	 			<div className="splash-form">
		 			<h2>Browse Beer Stuff</h2>
		 			<form onSubmit={this._handleSubmit} className='search-form' >
							<input 
								className="formField"
								type="text" 
								name="beerSearch"
								placeholder="enter your beer search"
							/>
						<button className="submitButton" type="submit">Search</button>
					</form>
				</div>
	 			<Beers beerCollection={this.state.beerCollection}/>
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
	addToFavorites: function(){
		ACTIONS.addFavorite(this.props.beerModel)
	},

	render: function(){
		var beerName= ''
		var beerLabel = ''
		var beerStyle= ''
		if(this.props.beerModel){
			var beerName = this.props.beerModel.get('name')
			var beerStyle = this.props.beerModel.get('style')
			var beerLabel = this.props.beerModel.get('labels')
		}
		
		return(
			<div className='single-beer'>
				<h2>{beerName}</h2>
				<button className='like' onClick={this.addToFavorites}>&hearts;</button>
				<h3>{beerStyle? beerStyle.category.name: ''}</h3>

				<a className="detailsATag" href={`#beerDetails/${this.props.beerModel.get('id')}`}>
					<img className="beerImage" src={beerLabel ? this.props.beerModel.get('labels').medium : 'images/defaultBeer.jpg'}/>
				</a>

			</div>
		)
	}
})

export default Search