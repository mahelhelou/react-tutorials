import React, { useState } from 'react'

/**
 * Counter button change (Increment and decrement)
 * Input typing change (Real time value)
 */
function StateTutorials() {
	const [count, setCount] = useState(0)
	const [inputValue, setInputValue] = useState('Initial textf')

	function handleIncrement() {
		setCount(prev => prev + 1)
	}

	function handleDecrement() {
		setCount(count > 0 ? prev => prev - 1 : 0)
	}

	// Handle input change
	function handleChange(event) {
		setInputValue(event.target.value)
	}

	return (
		<>
			<h2>Change counter value when clicking on buttons</h2>
			<p>{count}</p>
			<button onClick={handleIncrement}>Increment</button>
			<button onClick={handleDecrement}>Decrement</button>

			<h2>change input value on the fly!</h2>
			<input type='text' placeholder='Enter something...' onChange={handleChange} />
			{inputValue}
		</>
	)
}

export default StateTutorials
