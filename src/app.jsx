import { Footer } from "./components/layout/footer"
import { Header } from "./components/layout/header"
import { Routes, Route } from 'react-router-dom'
import { Home } from "./components/pages/home"
export const App = () => {
	return (
		<div className="container">
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
			<Footer />
		</div>
	)
}
