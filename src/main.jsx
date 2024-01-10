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
	Heading: {
		// baseStyle: {
		// 	color: 'black.500',
		// 	fontWeight: 'bold',
		// 	fontSize: '2xl',
		// },
		fontSize: {
			10: '300px'
		}
	},
	colors: {
		black: {
			100: '#171923',
			500: 'red',
		},
	},
});




ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<ChakraProvider theme={theme}>
				<App />
			</ChakraProvider>
		</BrowserRouter>
	</React.StrictMode>,
)
