import React from 'react'
import ACTIONS from './../actions.js'
import STORE from './../store.js'
import Banner from './components/banner.js'

const Search = React.createClass({

	render: function() {
	 	return (
	 		<div className='login-page' >
	 			<Banner />
	 			<h2>Browse Beer Stuff</h2>
	 			<SearchForm />
	 		</div>
	 	)
 	}
})

const SearchForm = React.createClass({
	componentWillMount:function(){
		STORE.on('dataUpdated', () => {
			this.setState(STORE.data)
		})
	},
	_handleSubmit: function(evtObj) {
		evtObj.preventDefault()
		var formEl = evtObj.target

		ACTIONS.searchBeer(formEl.beerSearch.value)
	},

	render: function() {
		return (
			<div className="searchDiv">
				<form onSubmit={this._handleSubmit} className='form-group register-form' >

						<input 
							className="formField"
							type="text" 
							name="beerSearch"
							placeholder="enter your beer search"
							/>

					<button className="submitButton" type="submit">submit</button>
				</form>
				<SearchCollection collection={STORE.data.beerCollection} />
			</div>
			)
	}
})

const SearchCollection = React.createClass({
	_makeBeers: function(){
		var newArray = []
		for (var i = 0; i<this.props.collection.models.length; i++){
			newArray.push(<BeerModels beerModels={this.props.collection.models[i]} />)
		}
		return newArray
	},
	render: function(){
		return(
			<div>
				{this._makeBeers()}
			</div>
		)
	}
})

const BeerModels = React.createClass({
	render: function(){
		console.log(this.props.beerModels)
		return(
			<div className='beerDiv'>
				<h1>{this.props.beerModels.get('name')}</h1>

			</div>
		)
	}
})




export default Search