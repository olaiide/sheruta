import moment from 'moment'
import React from 'react'
import { useSelector } from 'react-redux'

export default function EachConversation({ data }) {
	const { user } = useSelector(state => state.auth);
	const otherUser = data?.owner?.id === user?.id ? data?.guest : data?.owner;

  return (
		<li className="active">
			<a href="#">
				<div className="d-flex align-items-start">
					<div className="flex-shrink-0 user-img online align-self-center me-3">
						<img
							src={otherUser?.avatar_url}
							className="rounded-circle avatar-sm"
							alt=""
						/>
						<span className={`user-status ${!otherUser?.online && 'bg-danger'}`}></span>
					</div>

					<div className="flex-grow-1 overflow-hidden">
						<h5 className="text-truncate font-size-13 mb-1">
							{otherUser?.first_name}
						</h5>
						<p className="text-truncate mb-0">I've finished it! See you so</p>
					</div>
					<div className="flex-shrink-0">
						<div className="font-size-11">
							{moment(data?.created_at).fromNow()}
						</div>
					</div>
					<div className="unread-message">
						<span className="badge bg-danger rounded-pill">1</span>
					</div>
				</div>
			</a>
		</li>
	)
}
