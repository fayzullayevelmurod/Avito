import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

const theme = extendTheme({
	fonts: {
		body: "Inter, sans-serif",
		heading: "Inter, sans-serif",
	},
});




ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		<BrowserRouter>
			<ChakraProvider theme={theme}>
				<App />
			</ChakraProvider>
		</BrowserRouter>
	</>,
)
