import React from 'react'
import ACTIONS from './../actions.js'
import STORE from './../store.js'
import Banner from './components/banner.js'

const Recommendations = React.createClass({
	componentWillMount:function(){
		ACTIONS.fetchRecommendationsByUser(this.props.userId)
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
	 		<div className='favs-page'>
	 			<Banner />
	 			<h2>Here are the Recommendations you've received!</h2>
	 			
	 		</div>
	 	)
 	}
})



export default Recommendations