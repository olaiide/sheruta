import React from 'react'
import { Link } from 'react-router-dom'
import {
	FiHome,
	FiSettings,
	FiPower,
	FiMail,
	FiUsers,
	FiDatabase,
	FiEdit3,
} from 'react-icons/fi'
import { BiUser, BiBuildings } from 'react-icons/bi'
import { RiChat3Line } from 'react-icons/ri'
import { IoAnalyticsSharp } from 'react-icons/io5';
import { HiOutlineUserGroup } from 'react-icons/hi'

const EachNav = ({ Icon, title, route, count, active }) => {
	return (
		<li className={active && 'mm-active'}>
			<Link to={route} className={active ? 'active' : ''}>
				{Icon}
				{count && (
					<span className="badge rounded-pill bg-soft-success text-success float-end">
						{count}
					</span>
				)}
				<span data-key="t-dashboard">{title}</span>
			</Link>
		</li>
	)
}

export default function SideNav({ pageName }) {
	return (
		<div className="vertical-menu mm-active">
			<div data-simplebar="init" className="h-100 mm-show">
				<div className="simplebar-wrapper" style={{ margin: '0px' }}>
					<div className="simplebar-height-auto-observer-wrapper">
						<div className="simplebar-height-auto-observer"></div>
					</div>
					<div className="simplebar-mask">
						<div
							className="simplebar-offset"
							style={{ right: '-22.6667px', bottom: '0px' }}
						>
							<div
								className="simplebar-content-wrapper"
								style={{ height: '100%', overflow: 'hidden scroll' }}
							>
								<div className="simplebar-content" style={{ padding: '0px' }}>
									<div id="sidebar-menu" className="mm-active">
										<ul
											className="metismenu list-unstyled mm-show"
											id="side-menu"
										>
											<li className="menu-title" data-key="t-menu">
												Admin
											</li>

											<EachNav
												title="Home"
												route="/"
												Icon={<FiHome />}
												active={pageName === 'home'}
											/>
											<EachNav
												title="Logs"
												route="/logs"
												Icon={<FiDatabase />}
												active={pageName === 'logs'}
											/>
											<EachNav
												title="Blog"
												route="/blog"
												Icon={<FiEdit3 />}
												active={pageName === 'blog'}
											/>
											<EachNav
												title="Analytics"
												route="/analytics"
												Icon={<IoAnalyticsSharp />}
												active={pageName === 'users'}
											/>
											<EachNav
												title="Users"
												route="/users"
												Icon={<FiUsers />}
												active={pageName === 'users'}
											/>
											<EachNav
												title="Email"
												route="/email"
												Icon={<FiMail />}
												active={pageName === 'email'}
											/>
											<li className="menu-title" data-key="t-menu">
												Pages
											</li>
											<EachNav
												title="Properties"
												route="/properties"
												Icon={<BiBuildings />}
												active={pageName === 'email'}
											/>

											<li className="menu-title mt-2" data-key="t-components">
												Agents
											</li>

											<EachNav
												title="Join Paddy"
												route="/"
												Icon={<HiOutlineUserGroup />}
											/>
											<EachNav
												title="Chat"
												route="/"
												Icon={<RiChat3Line />}
												count={44}
											/>
											<li className="menu-title mt-2" data-key="t-components">
												Account
											</li>

											<EachNav
												title="Profile"
												route="/profile"
												Icon={<BiUser />}
											/>
											<EachNav
												title="Settings"
												route="/"
												Icon={<FiSettings />}
											/>
											<EachNav title="Logout" route="/" Icon={<FiPower />} />
										</ul>

										<div className="card sidebar-alert shadow-none text-center mx-4 mb-0 mt-5">
											<div className="card-body">
												<img src="assets/images/giftbox.png" alt="" />
												<div className="mt-4">
													<h5 className="alertcard-title font-size-16">
														Unlimited Access
													</h5>
													<p className="font-size-13">
														Upgrade your plan from a Free trial, to select
														‘Business Plan’.
													</p>
													<a href="#!" className="btn btn-primary mt-2">
														Upgrade Now
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className="simplebar-placeholder"
						// style="width: auto; height: 1293px;"
					></div>
				</div>
				<div
					className="simplebar-track simplebar-horizontal"
					// style="visibility: hidden;"
				>
					<div
						className="simplebar-scrollbar"
						// style="transform: translate3d(0px, 0px, 0px); display: none;"
					></div>
				</div>
				<div
					className="simplebar-track simplebar-vertical"
					// style="visibility: visible;"
				>
					<div
						className="simplebar-scrollbar"
						// style="height: 1056px; transform: translate3d(0px, 0px, 0px); display: block;"
					></div>
				</div>
			</div>
		</div>
	)
}
