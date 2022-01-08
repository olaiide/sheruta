import moment from 'moment'
import React, { useState } from 'react'
// import { Modal } from 'react-bootstrap';
// import EmailSender from '../../components/EmailSender/EmailSender';

export default function EachUserCard({ user }) {
	const [showEmail, setShowEmail] = useState(false)
	return (
		<div class="card">
			<div class="card-body">
				<div class="dropdown float-end">
					<a
						class="text-muted dropdown-toggle font-size-16"
						href="#"
						role="button"
						data-bs-toggle="dropdown"
						aria-haspopup="true"
					>
						<i class="bx bx-dots-horizontal-rounded"></i>
					</a>
					<div class="dropdown-menu dropdown-menu-end">
						<a class="dropdown-item" href="#">
							Edit
						</a>
						<a class="dropdown-item" href="#">
							Action
						</a>
						<a class="dropdown-item" href="#">
							Remove
						</a>
					</div>
				</div>
				<div class="d-flex align-items-center">
					<div>
						<img
							src={user?.avatar_url}
							alt=""
							class="avatar-lg rounded-circle img-thumbnail"
						/>
					</div>
					<div class="flex-1 ms-3">
						<h5 class="font-size-15 mb-1">
							<a href="#" class="text-dark">
								{user?.first_name} {user?.last_name}
							</a>
						</h5>
						<p class="text-muted mb-0">@{user?.username}</p>
					</div>
				</div>
				<div class="mt-3 pt-1">
					<p class="text-muted mb-0">
						<i class="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>
						{user?.phone_number}
					</p>
					<p class="text-muted mb-0 mt-2">
						<i class="mdi mdi-email font-size-15 align-middle pe-2 text-primary"></i>
						{user?.email}
					</p>
					<p class="text-muted mb-0 mt-2">
						<i class="mdi mdi-book font-size-15 align-middle pe-2 text-primary"></i>
						{user?.budget}
					</p>
				</div>
			</div>

			<div class="btn-group" role="group">
				<button type="button" class="btn btn-outline-light text-truncate">
					<i class="uil uil-user me-1"></i> Message
				</button>
				<button type="button" class="btn btn-outline-light text-truncate">
					<i class="uil uil-envelope-alt me-1"></i> Call
				</button>
			</div>
		</div>
	)
}
