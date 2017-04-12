import React from 'react'
import ACTIONS from './../actions.js'
import STORE from './../store.js'
import Banner from './components/banner.js'

const Pub = React.createClass({
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
	render: function() {
		console.log(this.state.recommendationsCollection)
	 	return (
	 		<div className='users-page'>
	 			<Banner />
	 			<h2>The Pub</h2>
	 			<Users userCollection={this.state.recommendationsCollection}/>
	 		</div>
	 	)
 	}
})

const Users = React.createClass({
	// makeBeers: function(model){
	// 	return <Beer 
	// 				beerModel={model}
	// 				key={model.cid}
	// 			/>
	// },
	render: function() {
		console.log(this.props.userCollection)
		return (
			<div className="beers">
							
			</div>
			)
	}
})

export default Pub