# `useState`

In contrast to React props, React state is used to make applications interactive. Both concepts, `props` and `state`, have clear defined purposes: `Props` are used to pass information down the component tree, `state` is used to alter information over time. Both can work hand in hand as well. We will see what this means in the following sections.

`State` generally refers to application data or properties that need to be tracked.

### `useState` accepts an initial state and returns two values:

- The current state.
- A function that updates the state.

### What `useState` Can Hold?

- The `useState` Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!
- We could create multiple state Hooks to track individual values.

```js
// Initialize state at the top of the function component
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function FavoriteColor() {
	const [color, setColor] = useState('red')

	return (
		<>
			<h1>My favorite color is {color}!</h1>
			<button type='button' onClick={() => setColor('blue')}>
				Blue
			</button>
			<button type='button' onClick={() => setColor('red')}>
				Red
			</button>
			<button type='button' onClick={() => setColor('pink')}>
				Pink
			</button>
			<button type='button' onClick={() => setColor('green')}>
				Green
			</button>
		</>
	)
}
```

### Setting multiple states for individual values

```js
import { useState } from 'react'
import ReactDOM from 'react-dom'

function Car() {
	const [brand, setBrand] = useState('Ford')
	const [model, setModel] = useState('Mustang')
	const [year, setYear] = useState('1964')
	const [color, setColor] = useState('red')

	return (
		<>
			<h1>My {brand}</h1>
			<p>
				It is a {color} {model} from {year}.
			</p>
		</>
	)
}
```

### We can just use one state and include an object instead!

```js
function Car() {
	const [car, setCar] = useState({
		brand: 'Ford',
		model: 'Mustang',
		year: '1964',
		color: 'red'
	})

	return (
		<>
			<h1>My {car.brand}</h1>
			<p>
				It is a {car.color} {car.model} from {car.year}.
			</p>
		</>
	)
}
```

### Updating Objects and Arrays in State

When state is updated, the entire state gets overwritten.

What if we only want to update the color of our car?

If we only called setCar({color: "blue"}), this would remove the brand, model, and year from our state.

We can use the JavaScript spread operator to help us.

```js
function Car() {
	const [car, setCar] = useState({
		brand: 'Ford',
		model: 'Mustang',
		year: '1964',
		color: 'red'
	})

	// Update only 1 value of the object
	const updateColor = () => {
		setCar(previousState => {
			return { ...previousState, color: 'blue' }
		})
	}

	return (
		<>
			<h1>My {car.brand}</h1>
			<p>
				It is a {car.color} {car.model} from {car.year}.
			</p>
			<button type='button' onClick={updateColor}>
				Blue
			</button>
		</>
	)
}
```
