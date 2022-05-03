# `useContext`

## Resources

- [Tutorial Source](https://dmitripavlutin.com/react-context-and-usecontext/#1-how-to-use-the-context)

## `Context` and `useContext()` Hook

- React Context is a way to manage state globally.
- It can be used together with the `useState` Hook to share state between deeply nested components more easily than with `useState` alone.

Using the context in React requires 3 simple steps: creating the context, providing the context, and consuming the context.

### 1. Creating the Context

The built-in factory function createContext(default) creates a context instance:

```js
import { createContext } from 'react'
const ContextName = createContext('Default Value')
```

The factory function accepts one optional argument: the default value.

### 2. Providing the Context

`Context.Provider` component available on the context instance is used to provide the context to its child components, no matter how deep they are.

To set the value of context use the value prop available on the `<Context.Provider value={value} />`:

```js
function Main() {
	const value = 'My Context Value'

	return (
		<Context.Provider value={value}>
			<MyComponent />
		</Context.Provider>
	)
}
```

### 3. Consuming the Context

Consuming the context can be performed in 2 ways:

1. The first way, the one I recommend, is to use the `useContext(ContextName)` React hook:

```js
import { useContext } from 'react'

function MyComponent() {
	const value = useContext(ContextName)

	return <span>{value}</span>
}
```

The hook returns the value of the context: `value = useContext(Context)`. The hook also makes sure to re-render the component when the context value changes.

2. The second way is by using a render function supplied as a child to Context.Consumer special component available on the context instance:

```js
function MyComponent() {
	return <Context.Consumer>{value => <span>{value}</span>}</Context.Consumer>
}
```

Again, in case if the context value changes, `<Context.Consumer>` will re-render its render function.

## 2. When do you need context?

The main idea of using the context is to allow your components to access some global data and re-render when that global data is changed. Context solves the props drilling problem: when you have to pass down props from parents to children.

You can hold inside the context:

- global state
- theme
- application configuration
- authenticated user name
- user settings
- preferred language
- a collection of services

## Example: 1 Level Context Provider

### `App.js`

```js
import React, { useState } from 'react'

// Contexts
import Theme from './hooks/UseContext/ThemeContext'

function App() {
	return (
		<div class='App'>
			<Theme />
		</div>
	)
}
```

### `Theme.js`

```js
import React, { createContext, useState } from 'react'
import Profile from './Profile'
import ToggleTheme from './ToggleTheme'

// 1. Create the context
export const ThemeContext = createContext()

const Theme = () => {
	// States
	const [currentTheme, setCurrentTheme] = useState('Dark')

	// Handlers/Callbacks
	function handleToggle() {
		setCurrentTheme(mode => (mode === 'Dark' ? 'Light' : 'Dark'))
	}

	// 2. Provide the context
	return (
		<div style={{ backgroundColor: currentTheme === 'Dark' ? '#333' : '#FFFDFA', color: currentTheme === 'Dark' ? '#FFFDFA' : '#333' }}>
			<ThemeContext.Provider value={{ currentTheme, handleToggle }}>
				<Profile />

				<button onClick={handleToggle}>Toggle</button>
				<ToggleTheme />
			</ThemeContext.Provider>
		</div>
	)
}

export default Theme
```

### `Profile.js`

```js
import React, { useContext } from 'react'
import User from './User'

// Contexts
import { ThemeContext } from './Theme'

/**
 * 3. Consume the context
 * Step 1 and 2 are available in ThemeContext
 */

const Profile = () => {
	const themeMode = useContext(ThemeContext)

	return (
		<div>
			<h1>I am a {themeMode.currentTheme} mode.</h1>

			<User />
		</div>
	)
}

export default Profile
```

### `User.js`

```js
import React, { useContext } from 'react'

// Contexts
import { ThemeContext } from './Theme'

const User = () => {
	const themeMode = useContext(ThemeContext)

	return <h3>{themeMode.currentTheme} is a wonderful theme</h3>
}

export default User
```
