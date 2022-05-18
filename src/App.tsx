import React from 'react';
import Contexts from "./contexts/ContextsWrapper";
import Themes from "./components/Themes";
import Content from "./components/Content";

function App() {
	
	return (
		<Contexts>
			<Themes>
				<Content/>
			</Themes>
		</Contexts>
	);
}

export default App;
