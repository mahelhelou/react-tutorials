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
