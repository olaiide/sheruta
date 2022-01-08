import moment from 'moment'
import React from 'react'
// import { Modal } from 'react-bootstrap';
// import EmailSender from '../../components/EmailSender/EmailSender';

export default function EachUserCard({ user }) {
	// const [showEmail, setShowEmail] = useState(false)
	return (
		<div className="card">
			<div className="card-body">
				<div className="dropdown float-end">
					<a
						className="text-muted dropdown-toggle font-size-16"
						href="#c"
						role="button"
						data-bs-toggle="dropdown"
						aria-haspopup="true"
					>
						<i className="bx bx-dots-horizontal-rounded"></i>
					</a>
					<div className="dropdown-menu dropdown-menu-end">
						<a className="dropdown-item" href="#c">
							Edit
						</a>
						<a className="dropdown-item" href="#c">
							Action
						</a>
						<a className="dropdown-item" href="#c">
							Remove
						</a>
					</div>
				</div>
				<div className="d-flex align-items-center">
					<div>
						<img
							src={user?.avatar_url}
							alt=""
							className="avatar-lg rounded-circle img-thumbnail"
						/>
					</div>
					<div className="flex-1 ms-3">
						<h5 className="font-size-15 mb-1">
							<a href="#c" className="text-dark">
								{user?.first_name} {user?.last_name}
							</a>
						</h5>
						<p className="text-muted mb-0">@{user?.username}</p>
					</div>
				</div>
				<div className="mt-3 pt-1">
					<p className="text-muted mb-0">
						<i className="mdi font-size-15 align-middle pe-2 text-primary">
							Joined
						</i>
						{moment(user?.created_at).fromNow()}
					</p>
					<p className="text-muted mb-0 mt-2">
						<i className="mdi mdi-email font-size-15 align-middle pe-2 text-primary"></i>
						{user?.email}
					</p>
					<p className="text-muted mb-0 mt-2">
						<i className="mdi mdi-send font-size-15 align-middle pe-2 text-primary"></i>
						N {window.formatedPrice.format(user?.budget)}
					</p>
				</div>
			</div>

			<div className="btn-group" role="group">
				<button type="button" className="btn btn-outline-light text-truncate">
					<i className="uil uil-user me-1"></i> Message
				</button>
				<button type="button" className="btn btn-outline-light text-truncate">
					<i className="uil uil-envelope-alt me-1"></i> Call
				</button>
			</div>
		</div>
	)
}
