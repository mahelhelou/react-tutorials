# `useEffect`

- The `useEffect` Hook allows you to perform side effects in your components.
- Some examples of side effects are: fetching data, directly updating the DOM, and timers.
- `useEffect` accepts two arguments. The second argument is optional.
- `useEffect(<function>, <dependency>)`

```js
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
```

`useEffect` runs on every render. That means that when the count changes, a render happens, which then triggers another effect.

This is not what we want. There are several ways to control when side effects run.

We should always include the second parameter which accepts an array. We can optionally pass dependencies to `useEffect` in this array.

### 1. No dependency passed:

```js
useEffect(() => {
	//Runs on every render
})
```

### 2. An empty array:

```js
useEffect(() => {
	//Runs only on the first render
}, [])
```

### 3. Props or state values:

```js
useEffect(() => {
	//Runs on the first render
	//And any time any dependency value changes
}, [prop, state])
```

### Use `useEffect` when the state changes only

```js
function Counter() {
	const [count, setCount] = useState(0)
	const [calculation, setCalculation] = useState(0)

	useEffect(() => {
		setCalculation(() => count * 2)
	}, [count]) // <- add the count variable here

	return (
		<>
			<p>Count: {count}</p>
			<button onClick={() => setCount(c => c + 1)}>+</button>
			<p>Calculation: {calculation}</p>
		</>
	)
}
```

### Effect Cleanup

- Some effects require cleanup to reduce memory leaks.
- Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
- We do this by including a return function at the end of the useEffect Hook.

> **Note:** To clear the timer, we had to name it.

### Clean up the timer at the end of the useEffect Hook:

```js
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

function Timer() {
	const [count, setCount] = useState(0)

	useEffect(() => {
		let timer = setTimeout(() => {
			setCount(count => count + 1)
		}, 1000)

		return () => clearTimeout(timer)
	}, [])

	return <h1>I've rendered {count} times!</h1>
}
```
