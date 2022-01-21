import React from 'react'
import Layout from '../../components/Layout/Layout'
import { GrAdd } from 'react-icons/gr'
import { Link } from 'react-router-dom'

export default function Properties() {
	return (
		<Layout pageName={'properties'}>
			<Link
				to="/properties/create"
				style={{
					position: 'fixed',
					right: '30px',
					bottom: '30px',
				}}
			>
				<button
					className="btn btn-primary btn-rounded shadow-lg"
					style={{
						borderRadius: '60px',
						fontWeight: 'bold',
						width: '70px',
						height: '70px',
						zIndex: '20',
					}}
				>
					<GrAdd size={30} />
				</button>
			</Link>
		</Layout>
	)
}
