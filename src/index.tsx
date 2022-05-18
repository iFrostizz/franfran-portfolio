import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<>
		<link
			rel="stylesheet"
			href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
		/>
		<React.StrictMode>
			<App/>
		</React.StrictMode>
	</>
);
