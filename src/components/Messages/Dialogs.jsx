import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {


	let dialogsElements = props.dialogs.map((d) => (<DialogItem name={d.name} id={d.id}/>));


	let messagesElements = props.messages.map((m) => (<Message message={m.message} id={m.id}/>));


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