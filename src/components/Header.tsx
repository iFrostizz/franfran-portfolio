import React, {useContext} from 'react'
import {ThemeContext} from "../contexts/ColorMode";
import {IconButton} from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import '../styles.css'

const Header = () => {
	const {isDarkMode, toggleDarkMode} = useContext(ThemeContext)
	
	return (
		<header>
			<a href="." className="website_title">franfran.dev</a>
			<span className="night_toggle">
				<IconButton sx={{ml: 1}} onClick={() => toggleDarkMode()} color="inherit">
					{isDarkMode ? <Brightness7Icon/> : <Brightness4Icon/>}
				</IconButton>
			</span>
		</header>
	)
}

export default Header