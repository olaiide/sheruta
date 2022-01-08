import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import EachUserCard from './EachUserCard'

export default function Users() {
	const [users, setUsers] = useState([])

	useEffect(() => {
		axios(
			process.env.REACT_APP_API_URL +
				'/users/?confirmed=true&_start=0&_sort=created_at:DESC'
		)
			.then((res) => {
				setUsers(res.data)
				console.log(res.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	return (
		<Layout pageName="users">
			<div className="container-fluid mt-4">
				
				<div class="row">
					{users.map((val, i) => {
						return (
							<div className="col-xl-3 col-sm-6 col-md-6">
								<EachUserCard key={val.id} user={val} />
							</div>
						)
					})}
				</div>
			</div>
		</Layout>
	)
}
