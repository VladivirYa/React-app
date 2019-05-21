import React from 'react';
import s from './Textarea.module.scss'
import {addMessActionCreator, updateNewMessTextCreator} from "../../../Redux/dialogs-reducer";


const Textarea = (props) => {

	let getMessElement = React.createRef();

	let addMess = () => {
		props.dispatch(addMessActionCreator());
	};

	let onMessChange = () =>{
		let text = getMessElement.current.value;
		let action = updateNewMessTextCreator(text);
		props.dispatch(action);

	};

	return (
		<div className={s.wrap}>
			<textarea ref={getMessElement} placeholder='Enter your message' onChange={onMessChange} value={props.dialogsPage}/>
			<div className={s.btn}>
				{/*<button onClick={addMess}>Add message</button>*/}
				<button className="ui primary button" onClick={addMess}>Click Here</button>
			</div>
		</div>
	);
};


export default Textarea;