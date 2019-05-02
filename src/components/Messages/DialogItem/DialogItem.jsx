import React from 'react';
import s from "../Dialogs.module.scss";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
	let path = "/messages/" + props.id;
	return (
		<li className={s.dialog + ' ' + s.active}>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png"
				alt="logo"/>
			<NavLink activeClassName={s.active} to={path}>{props.name}</NavLink>
		</li>
	);
};

export default DialogItem;