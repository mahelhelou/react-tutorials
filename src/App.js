import React from 'react'
import './App.css'

// States
import './hooks/UseState/UseState'
import './hooks/UseState/LoginForm'
import { LoginFormC, LoginFormF } from './hooks/UseState/LoginForm'
import StateTutorials from './hooks/UseState/UseState'

function App() {
	return (
		<>
			{/* States components */}
			<StateTutorials />
			<LoginFormC />
			<LoginFormF />
		</>
	)
}

export default App
