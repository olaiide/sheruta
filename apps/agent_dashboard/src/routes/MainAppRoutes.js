import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/Auth/Login/Login'

import '../ui_assets/css/icons.min.css'
import '../ui_assets/css/preloader.min.css'
import '../ui_assets/css/bootstrap.min.css'
import '../ui_assets/css/app.min.css'
import '../ui_assets/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.css'
import { useSelector } from 'react-redux'
import Home from '../pages/Home/Home'
import Logs from '../pages/Logs/Logs'
import Blog from '../pages/Blog/Blog'
import Analyticss from '../pages/Analytics/Analytics';
import Users from '../pages/Users/Users';
import Email from '../pages/Email/Email'
import Profile from '../pages/Profile/Profile'
import MasterPopup from '../components/MasterPopup/MasterPopup'

export default function MainAppRoutes() {
	const { user } = useSelector((state) => state.auth)
	return (
		<div>
			<MasterPopup />
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
						<Route path="/logs" element={<Logs />} />
						<Route path="/blog" element={<Blog />} />
						<Route path="/analytics" element={<Analyticss />} />
						<Route path="/users" element={<Users />} />
						<Route path="/email" element={<Email />} />
						<Route path="/profile" element={<Profile />} />
					</Routes>
				)}
			</BrowserRouter>
		</div>
	)
}
