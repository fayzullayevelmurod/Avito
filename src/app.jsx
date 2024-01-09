import { Routes, Route } from 'react-router-dom'
import routes from "./router"

export const App = () => {
	return (
		<>
			<Routes>
				{routes.map((routes, index) => {
					const { path, component: Component } = routes;
					return (
						<Route
							key={index}
							path={path}
							element={
								<Component />
							}
						/>
					);
				})}
			</Routes>
		</>
	)
}