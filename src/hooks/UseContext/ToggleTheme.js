import React, { useContext } from 'react'
import { ThemeContext } from './Theme'

const ToggleTheme = () => {
	const themeToggler = useContext(ThemeContext)

	return (
		<div>
			<button onClick={themeToggler.handleToggle}>Toggle Theme From Another Compoent</button>
		</div>
	)
}

export default ToggleTheme
