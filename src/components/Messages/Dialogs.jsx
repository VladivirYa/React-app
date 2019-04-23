import React from 'react';
import s from './Dialogs.module.scss'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
	let path = "/messages/" + props.id;
	return (
		<div className={s.dialog + ' ' + s.active}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	);
};
const Message = (props) => {
	return (
		<div className={s.message}>{props.mess}</div>
	);
};

const Dialogs = () => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialogItem name="Vladimir" id="1"/>
				<DialogItem name="Ivan" id="2"/>
				<DialogItem name="Grigoriy" id="3"/>
				<DialogItem name="Viktor" id="4"/>
				<DialogItem name="Roman" id="5"/>
			</div>
			<div className={s.messages}>
				<Message mess="Hi"/>
				<Message mess="How are you?"/>
				<Message mess="Hello World"/>
				<Message mess="Yo"/>
				<Message mess="Yo"/>
			</div>
		</div>
	);
};

export default Dialogs;