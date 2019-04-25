import React from 'react';
import s from "../Dialogs.module.scss";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
	let path = "/messages/" + props.id;
	return (
		<li className={s.dialog + ' ' + s.active}>
			<NavLink activeClassName={s.active} to={path}>{props.name}</NavLink>
		</li>
	);
};

export default DialogItem;