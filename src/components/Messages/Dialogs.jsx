import React from 'react';
import s from './Dialogs.module.scss'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
	let path = "/messages/" + props.id;
	return (
		<li className={s.dialog + ' ' + s.active}>
			<NavLink activeClassName={s.active} to={path}>{props.name}</NavLink>
		</li>
	);
};
const Message = (props) => {
	return (
		<div className={s.message}>{props.message}</div>
	);
};

const Dialogs = () => {

	let dialogs = [
		{id: 1, name: 'Vladimir'},
		{id: 2, name: 'Ivan'},
		{id: 3, name: 'Grigoriy'},
		{id: 4, name: 'Victor'},
		{id: 5, name: 'Roman'}
	];
	let messages = [
		{id: 1, message: 'Yo-yo'},
		{id: 2, message: 'Hello world'},
		{id: 3, message: 'How are you?'},
		{id: 4, message: 'bang bang'},
		{id: 5, message: 'hello hello hello'}
	];

	let dialogsElements = dialogs.map((d) => (<DialogItem name={d.name} id={d.id}/>));


	let messagesElements = messages.map((m) => (<Message message={m.message} id={m.id}/>));


	return (
		<div className={s.dialogs}>
			<ul className={s.dialogsItems}>
				{dialogsElements}

			</ul>
			<div className={s.messages}>
				{messagesElements}
			</div>
		</div>
	);
};

export default Dialogs;