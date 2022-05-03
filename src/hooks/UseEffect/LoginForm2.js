import React, { useState, useEffect } from 'react'

/**
 * Class based component
 * Old way of using component's state
 * Define initial states in an object
 */
export class LoginFormC2 extends React.Component {
	state = {
		email: '',
		password: ''
	}

	// Will run the first time the component rendered
	componentDidMount() {
		console.log('class Component did mount')
	}

	// Will run every time the component value or dependency changes
	componentDidUpdate(prevProps, prevState) {
		if (prevState.email !== this.state.email) {
			console.log('class Component: email did update')
		}

		if (prevState.password !== this.state.password) {
			console.log('class Component: password did update')
		}

		console.log('class Component did update')
	}

	// Will run when the component has been removed!
	componentWillUnmount() {
		console.log('class Component will unmount')
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

export function LoginFormF2() {
	/**
	 * Initial states
	 * Set the initial state and the function that updates the state
	 */
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	// On mount: Runs the first time the component rendered
	useEffect(() => {
		console.log('function Component did mount')

		return () => {
			console.log('function Component will unmount')
		}
	}, [])

	// Did update: updates every time the email changes
	useEffect(() => {
		if (email === '') return

		console.log('function Component did update')
	})

	// On changing the email
	useEffect(() => {
		if (email === '') return

		console.log('function Component: email did update')
	}, [email])

	// On changing the password
	useEffect(() => {
		if (password === '') return

		console.log('function Component: password did update')
	}, [password])

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
