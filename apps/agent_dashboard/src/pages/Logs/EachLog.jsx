import moment from 'moment'
import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import ReactJson from 'react-json-view'
import { Link } from 'react-router-dom'

const TimelineBox = ({ log }) => {
	const [showLogs, setShowLogs] = useState(false)
	const user = log?.users_permissions_user
	return (
		<div
			className={`timeline-box mt-0 mb-0 ${
				log.status === 'error' && 'border border-danger'
			}`}
		>
			<Modal show={showLogs} onHide={() => setShowLogs(false)} size="lg">
				<Modal.Header>
					<button
						className="btn btn-sm btn-danger"
						onClick={() => setShowLogs(!showLogs)}
					>
						Close
					</button>
				</Modal.Header>
				<Modal.Body>
					<ReactJson src={log.log} />
				</Modal.Body>
			</Modal>
			{user && (
				<div className="timeline-date bg-primary text-center rounded">
					<h3 className="text-white mb-0">{user && user.id}</h3>
					<p className="mb-0 text-white-50">
						{user && user.is_verified ? 'Verified' : 'Unverified'}
					</p>
				</div>
			)}
			<div className="event-content">
				<div className="timeline-text">
					<Link to={user ? `/user/${user?.id}`: `#`}>
						<h3 className="font-size-18">
							{user ? user.first_name + ' ' + user?.last_name : 'Someone'}
						</h3>
					</Link>
					<p className="mb-0 mt-2 pt-1 text-muted">{log.heading}</p>
					<p className="mb-0 mt-2 pt-1 text-muted fw-bold">
						{moment(log.created_at).fromNow()}
					</p>

					{log.log && (
						<button
							onClick={() => setShowLogs(!showLogs)}
							type="button"
							className="btn btn-primary btn-rounded waves-effect waves-light mt-4"
						>
							View Logs
						</button>
					)}
				</div>
			</div>
		</div>
	)
}

export default function EachLog({ log }) {
	const [user, setUser] = useState(log.users_permissions_user)

	function isOdd(num) {
		return num % 2
	}

	return (
		<div className={`row timeline-${isOdd(log.id) ? 'left' : 'right'}`}>
			{/* <div className="col-md-6 d-md-none d-block">
				<div className="timeline-icon">
					<i className="bx bx-camera text-primary h2 mb-0"></i>
				</div>
			</div> */}
			<div className="col-md-6">
				{isOdd(log.id) === 1 && <TimelineBox log={log} />}
			</div>
			<div className="col-md-6">
				{!isOdd(log.id) && <TimelineBox log={log} />}
				{/* <div className="timeline-icon">
					<i className="bx bx-camera text-primary h2 mb-0"></i>
				</div> */}
			</div>
		</div>
	)
}
