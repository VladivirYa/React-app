import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Field, reduxForm} from "redux-form";

const AddMessageForm = (props) => {
	return (
		<form className={s.wrap} onSubmit={props.handleSubmit}>
			<Field component="textarea" name="newMassageBody" placeholder="Enter your message"/>
			<div className={s.btn}>
				<button type="submit" className="ui primary button">Click Here</button>
			</div>
		</form>
	)
};

const AddMessageReduxForm = reduxForm({form: 'dialogsAddMessageForm'})(AddMessageForm);

const Dialogs = (props) => {

	let state = props.dialogsPage;

	let dialogsElements = state.dialogs.map((d) => (<DialogItem name={d.name} id={d.id} key={d.id}/>));

	let messagesElements = state.messages.map((m) => (<Message message={m.message} key={m.id} id={m.id}/>));

	let addNewMessage = (values) => {
		props.sendMess(values.newMassageBody);
	};


	return (
		<div>
			<div className={s.dialogs}>
				<div className={s.dialogs_box}>
					<ul className={s.dialogsItems}>
						{dialogsElements}
					</ul>
					<div className={s.messages}>
						{messagesElements}
					</div>
				</div>

				<AddMessageReduxForm onSubmit={addNewMessage}/>

			</div>

		</div>
	);
};

export default Dialogs;