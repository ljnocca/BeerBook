import React from 'react'

import ACTIONS from './../actions.js'
import Banner from './components/banner.js'

toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "3000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

const Login = React.createClass({
	 render: function() {
	 	return (

	 		<div className='login-page'>
	 			<h1 id="title">BeerBook</h1>
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

	denyAccess: function(){
		toastr.error("¯\_(ツ)_/¯ You must be 21 to view this website ¯\_(ツ)_/¯ ")
	},

	render: function() {
		return (
			<div className='splash-form'>
				<h2 className="h2-login">Register</h2>
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

						<h2>Are you at least 21 years of age?</h2>

					<button className="submitButton" type="submit">Yes, Register Me!</button>
				</form>
				<button className="tooYoung" onClick={this.denyAccess}> Not quite yet!</button>
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
				<h2 className="h2-login">Log In</h2>
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
					<button className="loginButton" type="submit">Log Me In</button>
				</form>
			</div>
			)
	}
})

export default Login