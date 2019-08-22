import React from 'react';
import s from "./Header.module.scss";
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return (
		<header className={s.header}>
			<NavLink to={'/profile'}>
				<img className={`${s.img} ${s.active}`}
				     src='https://yt3.ggpht.com/a-/AAuE7mB-sN6TajR14CcScVbgjsa421akzDrjgknd3g=s900-mo-c-c0xffffffff-rj-k-no'/>
			</NavLink>
			<div className={s.loginBlock}>
				{props.isAuth ? props.login :
					<NavLink to={'/login'}> Login </NavLink>}
			</div>
		</header>
	);
};

export default Header;