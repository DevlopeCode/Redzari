import React from 'react';
import './user-detail.css'
import { useDispatch, useSelector } from "react-redux";
import profile from '../../assets/img/profile-pic-male.svg'
import { Link } from 'react-router-dom';



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
					<div>
						<h5>My Orders</h5>
					</div>
					<div>
						<h5>Account Setting</h5>
						<Link to='/account/address' >Address </Link>
						<Link to='/account/profile'>Profile</Link>
					</div>
					<div>
						<h5>Payments</h5>
					</div>
				</div>
			</div>
			<div className='edit' >div2</div>
		</div>

	)
}

export default UserDetail;