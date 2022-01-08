import React from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../components/Layout/Layout'

export default function Profile() {
	const { user } = useSelector((state) => state.auth)

	return (
		<Layout pageName={'profile'}>
			<div>
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-12">
							<div
								className="profile-user"
								style={{
									backgroundImage: `url('https://picsum.photos/200/300')`,
								}}
							></div>
						</div>
					</div>
					<div className="row">
						<div className="profile-content">
							<div className="row align-items-end">
								<div className="col-sm">
									<div className="d-flex align-items-end mt-3 mt-sm-0">
										<div className="flex-shrink-0">
											<div className="avatar-xxl me-3">
												<img
													src={user.avatar_url}
													alt=""
													class="img-fluid rounded-circle d-block img-thumbnail"
												/>
											</div>
										</div>
										<div className="flex-grow-1">
											<div>
												<h5 className="font-size-16 mb-1">
													{user?.first_name} {user.last_name}
												</h5>
												<p className="text-muted font-size-13 mb-2 pb-2">
													@{user.username}
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-auto">
									<div className="d-flex align-items-start justify-content-end gap-2 mb-2">
										<div>
											<button type="button" className="btn btn-success">
												<i className="me-1"></i> Message
											</button>
										</div>
										<div>
											<div className="dropdown">
												<button
													class="btn btn-link font-size-16 shadow-none text-muted dropdown-toggle"
													type="button"
													data-bs-toggle="dropdown"
													aria-expanded="false"
												>
													<i className="bx bx-dots-horizontal-rounded font-size-20"></i>
												</button>
												<ul className="dropdown-menu dropdown-menu-end">
													<li>
														<a className="dropdown-item" href="#">
															Action
														</a>
													</li>
													<li>
														<a className="dropdown-item" href="#">
															Another action
														</a>
													</li>
													<li>
														<a className="dropdown-item" href="#">
															Something else here
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
