import React from 'react'
import Layout from '../../components/Layout/Layout'
import { GrAdd } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import EachProperty from './components/EachProperty'
import { useSelector } from 'react-redux'

export default function Properties() {

	const { properties } = useSelector(state => state.agent);

	return (
		<Layout pageName={'properties'}>
			<Link
				to="/properties/create"
				style={{
					position: 'fixed',
					right: '30px',
					bottom: '30px',
					zIndex: 90,
				}}
				>
				<button
					className="btn btn-primary btn-rounded shadow-lg"
					style={{
						borderRadius: '60px',
						fontWeight: 'bold',
						width: '70px',
						height: '70px',
					}}
				>
					<GrAdd size={30} />
				</button>
			</Link>
			<div className="row">
				{properties.map((val, i) => {
					return (
						<div className="col-xl-4 col-sm-6" key={`prop-${i}`}>
							<EachProperty data={val} />
						</div>
					)
				})}
				
			</div>
		</Layout>
	)
}
