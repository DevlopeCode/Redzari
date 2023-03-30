import React from 'react'
import NavbarV5 from './global-components/navbar-v5'
import Page_header from './global-components/page-header'
import UserDetail from './section-components/user-detail'

const Account = () => {
	return (
		<div>
			<NavbarV5 />
			<Page_header headertitle="Account" />
			<UserDetail />
		</div>
	)
}

export default Account