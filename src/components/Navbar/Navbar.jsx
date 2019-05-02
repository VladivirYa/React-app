import React from "react";
import s from "./Navbar.module.scss";
import {NavLink} from "react-router-dom";
import Friends from "./Frends";

const Navbar = (props) => {

	let friendData = props.friends.friends.map((n) => (<Friends image={n.src} name={n.name}/>));


	return (
		<div className={s.nav}>
			<nav >
				<ul>
					<li className={s.item}>
						<NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
					</li>
					<li className={s.item}>
						<NavLink to="/messages" activeClassName={s.activeLink}>Messages</NavLink>
					</li>
					<li className={s.item}>
						<NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
					</li>
					<li className={s.item}>
						<NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
					</li>
					<li className={s.item}>
						<NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
					</li>
				</ul>
			</nav>
			{/*component Frends*/}
			<div className={s.friends}>
				<h1>Friends</h1>
				<div className={s.friends__wrap}>
				{friendData}
				</div>
			</div>
		</div>

	);
};

export default Navbar;
