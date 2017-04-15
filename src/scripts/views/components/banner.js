import React from 'react'
import ACTIONS from './../../actions.js'

import User from './../../models/userModel.js'


const Banner = React.createClass({
	render: function(){

	 	var myFavorites = User.getCurrentUser() ? "#favorites/user/" + User.getCurrentUser().get('_id') : ''
	 	return (
	 		<div className='banner' >
	 			<h1 id="title">BeerBook</h1>
	 			<ul className="navigation">

	 				<li className="navItem">
	 					<a href="#login" className="navLink">
	 						Log In
	 					</a>
	 				</li>

	 				<li className="navItem">
	 					<a onClick={ACTIONS.logout} className="logoutLink">
	 						Log Out
	 					</a>
	 				</li>

	 			</ul>

	 			<ul className="navigation">

	 				<li className="navItem">
	 					<a href="#search" className="navLink">
	 						Search
	 					</a>
	 				</li>

	 				<li className="navItem">
	 					<a href={myFavorites} className="navLink">
	 						My Favorites
	 					</a>
	 				</li>

	 				<li className="navItem">
	 					<a href="#pub" className="navLink">
	 						The PUB
	 					</a>
	 				</li>

	 				<li className="navItem">
	 					<a href="#recommendations" className="navLink">
	 						Beers Recommended to Me
	 					</a>
	 				</li>

	 				<li className="navItem">
	 					<a href="#learn" className="navLink">
	 						Beer 101
	 					</a>
	 				</li>
	
	 			</ul>
	 		</div>
	 	)
 	}
})

export default Banner