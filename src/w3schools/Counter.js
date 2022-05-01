import React, { useEffect, useState } from 'react'

function Counter() {
	const [count, setCount] = useState(0)

	// Start timer and increase counter every 1 second
	useEffect(() => {
		setTimeout(() => {
			setCount(count => count + 1)
		}, 1000)
	})

	return (
		<>
			<h1>I've rendered {count} times!</h1>
		</>
	)
}

export default Counter
