import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/Auth/Login/Login'

import '../ui_assets/css/icons.min.css'
import '../ui_assets/css/preloader.min.css'
import '../ui_assets/css/bootstrap.min.css'
import '../ui_assets/css/app.min.css'
import '../ui_assets/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.css'
import { useSelector } from 'react-redux'
import Home from '../pages/Home/Home'

export default function MainAppRoutes() {
	const { user } = useSelector((state) => state.auth)
	return (
		<div>
			<BrowserRouter>
				{!user ? (
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/login" element={<Login />} />
					</Routes>
				) : (
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
					</Routes>
				)}
			</BrowserRouter>
		</div>
	)
}
