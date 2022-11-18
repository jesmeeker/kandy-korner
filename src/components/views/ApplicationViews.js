import { Locations } from '../Locations'
import { Products } from '../Products'
import { Outlet, Route, Routes } from "react-router-dom"


export const ApplicationViews = () => {

	

	return (<Routes>
				<Route path="/" element={
					<>
						<h1>Kandy Korner </h1>
						<div>🍭 I'll take you to the Kandy Shoppe 🍭</div>

                    <Outlet />
					</>
				}>
					<Route path="locations" element={ <Locations /> } />
					<Route path="products" element={ <Products /> } />
				</Route>

			</Routes>	
	)
}