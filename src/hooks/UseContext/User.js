import React, { useContext } from 'react'

// Contexts
import { ThemeContext } from './Theme'

const User = () => {
	const themeMode = useContext(ThemeContext)

	return <h3>{themeMode.currentTheme} is a wonderful theme</h3>
}

export default User
