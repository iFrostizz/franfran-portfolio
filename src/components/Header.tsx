import React, {useContext} from 'react'
import {ThemeContext} from "../contexts/ColorMode";
import {IconButton} from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import styled from 'styled-components'

const MainTitle = styled.div`text-align: center;
margin-left: 100px;
font-size: 4em;`
const NightToggle = styled.span`float: right;
  margin-right: 20px;`

const Header = () => {
	const {isDarkMode, toggleDarkMode} = useContext(ThemeContext)
	
	return (
		<header>
			<MainTitle><a href=".">franfran.dev</a>
				<NightToggle>
					<IconButton sx={{ml: 1}} onClick={() => toggleDarkMode()} color="inherit">
						{isDarkMode ? <Brightness7Icon/> : <Brightness4Icon/>}
					</IconButton>
				</NightToggle>
			</MainTitle>
		</header>
	)
}

export default Header