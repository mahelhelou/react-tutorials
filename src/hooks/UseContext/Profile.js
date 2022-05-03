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
