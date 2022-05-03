import React, { useState } from 'react'
import './App.css'

// States
import './hooks/UseState/UseState'
import './hooks/UseState/LoginForm'
import { LoginFormC, LoginFormF } from './hooks/UseState/LoginForm'
import StateTutorials from './hooks/UseState/UseState'

// Effects
import { LoginFormC2, LoginFormF2 } from './hooks/UseEffect/LoginForm2'

// Contexts
import Theme from './hooks/UseContext/Theme'

function App() {
	const [visible, setVisible] = useState(true)

	return (
		<div>
			{/* States components */}
			{/* <StateTutorials />
			<LoginFormC />
			<LoginFormF /> */}

			{/* Effects */}
			{/* {visible ? (
				<>
					<LoginFormC2 />
					<LoginFormF2 />
				</>
			) : null}

			<button onClick={() => setVisible(!visible)}>Toggle Class</button> */}

			{/* Contexts */}
			<Theme />
		</div>
	)
}

export default App
