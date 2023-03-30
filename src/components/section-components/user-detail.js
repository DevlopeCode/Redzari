import React from 'react';
import './user-detail.css'
import { useDispatch, useSelector } from "react-redux";
import profile from '../../assets/img/profile-pic-male.svg'



const UserDetail = () => {

	const { user } = useSelector((state) => state.user);
	console.log('heloooooo', user)
	return (
		<div className='account' >
			<div>
				<div className='profile' >
					<img src={profile} />
					<span>hello</span>
				</div>
				<div className='order' >
					<div>MY ORDERS</div>
					<div>ACCOUNT SEETING</div>
					<div>PAYMENTS</div>
				</div>
			</div>
			<div className='edit' >div2</div>
		</div>

	)
}

export default UserDetail;