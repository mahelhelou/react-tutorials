import React, { useState, useReducer } from 'react'

/**
 * useReducer replaces useState, it manages the states of the components
 * It renders the values when they are changed, like useState
 */
function ReducerTutorials() {
	const [count, setCount] = useState(0)
	const [showText, setShowText] = useState(true)

	function handleClick() {
		setCount(prev => prev + 1)
		setShowText(!showText)
	}

	return (
		<>
			<h2>{count}</h2>
			<button onClick={handleClick}>Increment</button>

			{showText && <h4>This is a showText</h4>}
		</>
	)
}

export default ReducerTutorials
