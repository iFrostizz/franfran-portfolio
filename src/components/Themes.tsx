import {CssBaseline} from "@mui/material";
import React, {useContext, useMemo} from "react";
import {ThemeContext} from "../contexts/ColorMode";
import {createTheme, ThemeProvider} from "@mui/material/styles";

const Themes = ({children}: { children: JSX.Element }) => {
	const {isDarkMode} = useContext(ThemeContext)
	
	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: isDarkMode ? 'dark' : 'light',
				},
			}),
		[isDarkMode],
	);
	
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline/>
			{children}
		</ThemeProvider>
	)
}

export default Themes
