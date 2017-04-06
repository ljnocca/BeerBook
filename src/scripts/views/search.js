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
		console.log(this.state.beerCollection)
	 	return (
	 		<div className='login-page' >
	 			<Banner />
	 			<h2>Browse Beer Stuff</h2>
	 			<form onSubmit={this._handleSubmit} className='form-group register-form' >

						<input 
							className="formField"
							type="text" 
							name="beerSearch"
							placeholder="enter your beer search"
							/>

					<button className="submitButton" type="submit">submit</button>
				</form>
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
	render: function(){
		console.log(this.props.beerModel)
		return(
			<div className='beerDiv'>
				<h2>{this.props.beerModel.get('name')}</h2>
			
				<p>{this.props.beerModel.get('description')}</p>
			</div>
		)
	}
})



export default Search