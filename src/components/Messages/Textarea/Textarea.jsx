import React from 'react';
import s from './Textarea.module.scss'

const Textarea = () => {

	let addMessElement = React.createRef();

	let addMess = () => {
		let mess = addMessElement.current.value;
		alert(mess);
	};
	return (
		<div className={s.wrap}>
			<textarea ref={addMessElement}/>
			<div className={s.btn}>
				<button onClick={addMess}>Add message</button>
			</div>
		</div>
	);
};

export default Textarea;