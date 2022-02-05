import moment from 'moment'
import React from 'react'

export default function EachAgent({data}) {
	return (
		<div className="col-xl-4 col-sm-6 col-md-6">
			<div className="card">
				<div className="card-body">
					<div className="dropdown float-end">
						<a
							className="text-muted dropdown-toggle font-size-16"
							href="#"
							role="button"
							data-bs-toggle="dropdown"
							aria-haspopup="true"
						>
							<i className="mdi mdi-menu"></i>
						</a>
						
					</div>
					<div className="d-flex align-items-center">
						<div>
							<img
								src={data?.avatar_url}
								alt=""
								className="avatar-lg rounded-circle img-thumbnail"
							/>
						</div>
						<div className="flex-1 ms-3">
							<h5 className="font-size-15 mb-1">
								<a href="#" className="text-dark">
									{data?.first_name} {data?.last_name}
								</a>
							</h5>
							<p className="text-muted mb-0">@{data?.username}</p>
						</div>
					</div>
					<div className="mt-3 pt-1">
						<p className="text-muted mb-0">
							<i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>
							{data?.phone_number}
						</p>
						<p className="text-muted mb-0 mt-2">
							<i className="mdi mdi-email font-size-15 align-middle pe-2 text-primary"></i>
							{data?.email}
						</p>
						<p className="text-muted mb-0 mt-2">
							<i className="mdi mdi-calendar font-size-15 align-middle pe-2 text-primary"></i>
							{moment(data?.created_at).fromNow()}
						</p>
					</div>
				</div>

				<div className="btn-group" role="group">
					<button type="button" className="btn btn-outline-light text-white btn-success">
						<i className="uil uil-user me-1"></i> Accept
					</button>
					<button type="button" className="btn btn-outline-light text-white btn-danger">
						<i className="uil uil-envelope-alt me-1"></i> Reject
					</button>
				</div>
			</div>
		</div>
	)
}
