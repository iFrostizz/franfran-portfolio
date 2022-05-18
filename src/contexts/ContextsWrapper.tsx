import {ThemeContextProvider} from "./ColorMode";

const Contexts = ({children}: { children: JSX.Element }) => {
	return (
		<ThemeContextProvider>
			{children}
		</ThemeContextProvider>
	)
}

export default Contexts