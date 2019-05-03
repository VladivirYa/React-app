import React from 'react';
import s from './Navbar.module.scss'

const Friends = (props) => {
	return (
		<div >
			<div className={s.item}>
				<img src={props.image} alt="logo"/>
				<p>{props.name}</p>
			</div>
		</div>
	);
};

export default Friends;