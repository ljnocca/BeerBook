import React from 'react'
import ACTIONS from './../../actions.js'

import User from './../../models/userModel.js'


const Banner = React.createClass({
	render: function(){

		var welcomeText = User.getCurrentUser() ? `Welcome ${User.getCurrentUser().get('name')}!` : ''
	 	return (
	 		<div className='banner' >
	 			<h1 id="title">BeerBook</h1>
	 			<ul className="nav">

	 				<li className="nav-item">
	 					<a href="#login" className="nav-link">
	 						Login / Signup
	 					</a>
	 				</li>

	 				<li className="nav-item">
	 					<a href="#profile" className="nav-link">
	 						My Profile
	 					</a>
	 				</li>

	 				<li className="nav-item">
	 					<a href="#favorites" className="nav-link">
	 						My Favorites
	 					</a>
	 				</li>

	 				<li className="nav-item">
	 					<a href="#recommendations" className="nav-link">
	 						My Recommended Beers
	 					</a>
	 				</li>

	 				<li className="nav-item">
	 					<a href="#search" className="nav-link">
	 						Browse
	 					</a>
	 				</li>

	 				<li className="nav-item">
	 					<a onClick={ACTIONS.logout} className="logoutLink">
	 						Log Out
	 					</a>
	 				</li>
	 				
	 			</ul>
	 			<h2>
	 				{welcomeText}
	 			</h2>
	 		</div>
	 	)
 	}
})

export default Banner