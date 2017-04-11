import React from 'react'
import ACTIONS from './../actions.js'
import STORE from './../store.js'
import Banner from './components/banner.js'

const Search = React.createClass({
	componentWillMount:function(){
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

		console.log(this.props.beerModel)
		var beerName = this.props.beerModel.get('name')
		var beerStyle = this.props.beerModel.get('style')
		var beerLabel = this.props.beerModel.get('labels')
		var beerDescription = this.props.beerModel.get('description')
		var beerFoodPairing = this.props.beerModel.get('foodPairings')
		var beerOrganic = this.props.beerModel.get('isOrganic')
		var beerABV = this.props.beerModel.get('abv')
		var beerIBU = this.props.beerModel.get('ibu')
		return(
			<div className='beerDiv'>
				<h2>{beerName}</h2>
				<button className='like' onClick={this.addToFavorites}>Favorite!</button>
				<h3>{beerStyle? beerStyle.category.name: ''}</h3>

				<img src={beerLabel ? this.props.beerModel.get('labels').medium : 'images/defaultBeer.jpg'}/>
				<h5>{beerABV ? `ABV: ${beerABV}%`: ''}</h5>
				<h5>{beerIBU ? `IBU: ${beerIBU}`: ''}</h5>

				<h3>{beerDescription ? 'Beer Description': ''}</h3>
				<p>{beerDescription ? beerDescription: ''}</p>

				<h3>{beerFoodPairing? 'Food Pairings': ''}</h3>
				<p>{beerFoodPairing? beerFoodPairing: ''}</p>
				<p>{beerOrganic ? `Organic? ${beerOrganic}`: ''}</p>
			</div>
		)
	}
})

export default Search