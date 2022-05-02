import React, { useState } from 'react'

/**
 * Class based component
 * Old way of using component's state
 * Define initial states in an object
 */
export class LoginFormC extends React.Component {
	state = {
		email: '',
		passsword: ''
	}

	/**
	 * Don't use function keyword!
	 * Pass the value of new state as an object
	 */
	hanldeEmail = e => {
		this.setState({
			email: e.target.value
		})
	}

	hanldePassword = e => {
		this.setState({
			password: e.target.value
		})
	}

	/**
	 * Use (this) keyword to render the initial state
	 */
	render() {
		return (
			<div>
				<h2>Class Example</h2>
				<input value={this.state.email} onChange={this.hanldeEmail} placeholder='email' />
				<input value={this.state.password} onChange={this.hanldePassword} placeholder='password' />

				<h3>What I Typed?</h3>
				<h5>Email: {this.state.email}</h5>
				<h5>Password: {this.state.password}</h5>
			</div>
		)
	}
}

export function LoginFormF() {
	/**
	 * Initial states
	 * Set the initial state and the function that updates the state
	 */
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	// Use the function to update the state (With function keyword)
	function hanldeEmail(e) {
		setEmail(e.target.value)
	}

	function hanldePassword(e) {
		setPassword(e.target.value)
	}

	return (
		<div>
			<h2>Function Example</h2>
			<input value={email} onChange={hanldeEmail} placeholder='email' />
			<input value={password} onChange={hanldePassword} placeholder='password' />

			<h3>What's I Typed?</h3>
			<h5>Email: {email}</h5>
			<h5>Password: {password}</h5>
		</div>
	)
}
