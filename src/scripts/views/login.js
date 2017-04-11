import React from 'react'

import ACTIONS from './../actions.js'
import Banner from './components/banner.js'

const Login = React.createClass({
	 render: function() {
	 	return (

	 		<div className='login-page'>
	 			<Banner />
	 			<RegisterForm />
	 			<LoginForm />
	 		</div>
	 	)
 	}
})

const RegisterForm = React.createClass({
	_handleSubmit: function(evtObj) {
		evtObj.preventDefault()
		var formEl = evtObj.target
		var	userData = {
				name: formEl.yourName.value,
				email: formEl.email.value,
				password: formEl.password.value
			}
		ACTIONS.registerUser(userData)
	},

	render: function() {
		return (
			<div className='splash-form'>
				<h2>Register</h2>
				<form onSubmit={this._handleSubmit}  >
						<input 
						className="formField"
						type="text" 
						name="yourName"
						placeholder="enter your name"
						/>

						 <input 
						className="formField"
					 	type="text" 
					 	name="email"
					 	placeholder="enter your email"
					 	/>

						<input 
						className="formField"
						type="password" 
						name="password" 
						placeholder="enter your password"
						/>

					<button className="submitButton" type="submit">submit</button>
				</form>
			</div>
			)
	}
})



const LoginForm = React.createClass({
	_handleSubmit: function(evtObj) {
		evtObj.preventDefault()
		ACTIONS.logUserIn(evtObj.target.email.value, evtObj.target.password.value)
	},

	render: function() {
		return (
			<div className='splash-form'>
				<h2>Log In</h2>
				<form onSubmit={this._handleSubmit} className='login-form' >
						 <input 
							className="formField"
						 	type="text" 
						 	name="email"
						 	placeholder="enter your email"
						 	 />
						<input 
							className="formField"
							type="password" 
							name="password" 
							placeholder="enter your password"
							/>
					<button className="submitButton" type="submit">submit</button>
				</form>
			</div>
			)
	}
})

export default Login