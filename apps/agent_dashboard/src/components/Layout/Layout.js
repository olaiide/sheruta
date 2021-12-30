import React from 'react'
import Header from './Header'
import SideNav from './SideNav'

export default function Layout({ children, pageName }) {
	return (
		<div id="layout-wrapper">
			<Header />
			<SideNav pageName={pageName} />
			<div className="main-content">
				<div className="page-content">{children}</div>
			</div>
		</div>
	)
}
