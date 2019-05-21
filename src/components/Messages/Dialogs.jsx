import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Message2 from './Message/Message2'
import Textarea from "./Textarea/Textarea";


const Dialogs = (props) => {


	let dialogsElements = props.store.dialogs.map((d) => (<DialogItem name={d.name} id={d.id}/>));

	let messagesElements = props.store.messages.map((m) => (<Message message={m.message} id={m.id}/>));

	// let messages2Elements = props.store.messages2.map((m) => (<Message2 message2={m.message} id={m.id}/>));

	return (
		<div>
		<div className={s.dialogs}>
			<ul className={s.dialogsItems}>
				{dialogsElements}

			</ul>
			<div className={s.messages}>
				{messagesElements}
			</div>
			{/*<div className={s.messages2}>*/}
			{/*	{messages2Elements}*/}
			{/*</div>*/}
		</div>
			<Textarea dialogsPage={props.store.newMessText} dispatch={props.dispatch}/>
		</div>
	);
};

export default Dialogs;