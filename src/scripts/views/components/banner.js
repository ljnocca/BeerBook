import React from 'react'
import ACTIONS from './../../actions.js'

import User from './../../models/userModel.js'


const Banner = React.createClass({
	render: function(){

		var welcomeText = User.getCurrentUser() ? `Welcome ${User.getCurrentUser().get('name')}!` : ''
	 	return (
	 		<div className='banner' >
	 			<h1 id="title">BeerBook</h1>
	 			<ul className="navigation">

	 				<li className="navItem">
	 					<a href="#login" className="navLink">
	 						Login / Signup
	 					</a>
	 				</li>

	 				<li className="navItem">
	 					<a href="#profile" className="navLink">
	 						My Profile
	 					</a>
	 				</li>

	 				<li className="navItem">
	 					<a href="#favorites" className="navLink">
	 						My Favorites
	 					</a>
	 				</li>

	 				<li className="navItem">
	 					<a href="#recommendations" className="navLink">
	 						Beers Recommended to Me
	 					</a>
	 				</li>

	 				<li className="navItem">
	 					<a href="#search" className="navLink">
	 						Search
	 					</a>
	 				</li>

	 				<li className="navItem">
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