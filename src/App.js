import React from 'react'
import './App.css'

// States
import './_hooks/UseState/UseState'
import './_hooks/Hello'
import './_hooks/UseState/LoginForm'
import StateTutorials from './_hooks/UseState'
// import ReducerTutorials from './hooks/UseReducer/UseReducer'
// import Garage from './w3schools/Garage'
// import TodoApp from './w3schools/TodoApp'
// import Counter from './w3schools/Counter'

function App() {
	// return <ReducerTutorials />
	// return <Garage />
	// return <TodoApp />
	return (
		<>
			<StateTutorials />
		</>
	)
}

export default App
