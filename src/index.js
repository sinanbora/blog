import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'

ReactDOM.render(
	<AuthContextProvider>
		<ThemeProvider>
			<App />
		</ThemeProvider>
		
	</AuthContextProvider>, document.getElementById('root')
);