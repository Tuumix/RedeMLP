import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/app'
import GlobalStyles from './components/styles/global'

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyles />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)
