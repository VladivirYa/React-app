import React from 'react';
import s from './Textarea.module.scss'

const Textarea = (props) => {

	let getMessElement = React.createRef();

	let addMess = () => {
		props.addMess();
	};

	let onMessChange = () =>{
		let text = getMessElement.current.value;
		props.updateNewMessText(text);

	};

	return (
		<div className={s.wrap}>
			<textarea ref={getMessElement} onChange={onMessChange} value={props.dialogsPage}/>
			<div className={s.btn}>
				<button onClick={addMess}>Add message</button>
			</div>
		</div>
	);
};

export default Textarea;