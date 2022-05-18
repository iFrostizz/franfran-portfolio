import {createContext, useState} from "react";
import {useMediaQuery} from "@mui/material";

const ThemeContext = createContext({
	isDarkMode: false,
	toggleDarkMode: () => {}
})

const ThemeContextProvider = ({children}: { children: JSX.Element }) => {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
	
	const [isDarkMode, setDarkMode] = useState<boolean>(prefersDarkMode)
	
	const toggleDarkMode = () => {
		setDarkMode(!isDarkMode)
	}
	
	return (
		<ThemeContext.Provider value={{isDarkMode, toggleDarkMode}}>
			{children}
		</ThemeContext.Provider>
	)
}

export {ThemeContext, ThemeContextProvider}