import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Message2 from './Message/Message2'


const Dialogs = (props) => {
 debugger
	let state = props.dialogsPage;

	let dialogsElements = state.dialogs.map((d) => (<DialogItem name={d.name} id={d.id}/>));

	let messagesElements = state.messages.map((m) => (<Message message={m.message} id={m.id}/>));

	// let messages2Elements = props.store.messages2.map((m) => (<Message2 message2={m.message} id={m.id}/>));

	let getMessElement = React.createRef();

	let onAddMess = () => {
		props.addMess();
	};

	let onMessChange = () => {
		let text = getMessElement.current.value;
		props.updateNewMessTextCreator(text);
	};

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
			<div className={s.wrap}>
				<textarea ref={getMessElement} placeholder='Enter your message' onChange={onMessChange}
				          value={props.newMessText}/>
				<div className={s.btn}>
					{/*<button onClick={addMess}>Add message</button>*/}
					<button className="ui primary button" onClick={onAddMess}>Click Here</button>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;