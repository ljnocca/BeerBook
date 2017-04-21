import React from 'react'
import ACTIONS from './../../actions.js'
import STORE from './../../store.js'

const RecommendationModal = React.createClass({
	componentWillMount:function(){
		ACTIONS.fetchAllUsers()
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
	render:function(){
		return(
		<Modal 
		userCollection={this.state.userCollection}
		/>
		)
	}
})

const Modal = React.createClass({
	componentWillMount:function(){
		STORE.on('dataUpdated', () => {
			this.setState(STORE.data)
		})
	},
	getInitialState: function() {
		return STORE.data
	},
	createUserOptions: function(singleUser){
		return (
			<option value={singleUser.get('_id')}>{singleUser.get('name')}</option>
		)
	},
	_closeModal: function() {
		ACTIONS.closeModal()
	},
	_handleSubmit: function(eventObj){
		eventObj.preventDefault()

		var formEl = eventObj.target
		var recommendationData = {
			recommendingUser: this.state.recommendBeer.attributes.userId,
			targetUser: formEl.recomendee.value,
			beerFave:this.state.recommendBeer.id
		}

		console.log(recommendationData)

		formEl.reset()
		ACTIONS.recommendBeer(recommendationData)
	},
	render: function(){
		var modalClass = this.state.modalShowing ? "modal-div" : "modal-div hidden"
		// console.log('this on modal',this)
		return(
			<div className={modalClass} > 
				<div className="form">
		 			<h3>You are recommending {this.state.recommendBeer.get('name')} to: </h3>
		 			<form onSubmit={this._handleSubmit} className='recommendationForm'>
						<select name="recomendee" >
							<option disabled>who are you recommending to?</option>
			 				{this.props.userCollection.map(this.createUserOptions)}	 				
			 			</select>
						<input className="comments" name='comments' type='text' placeholder='Any comments on this beer?' />
						<button className="loginButton" type="submit">Send my recommendation!</button>
					</form>
					<button className="tooYoung" onClick={this._closeModal}>&times;</button>
				</div>
		 	</div>
		)
	}
})

export default RecommendationModal