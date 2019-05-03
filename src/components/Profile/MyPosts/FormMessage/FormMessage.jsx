import React from "react";
import s from "./FormMessage.module.scss";

const FormMessage = () => {

	let getPostElement = React.createRef();

	let addPost = () =>{
		let text = getPostElement.current.value;
		alert(text)
	}

	return (
		<div>
			<div className={s.title}>
				<h3>My posts</h3>
			</div>
			<div className={s.post__wrap}>
				<div className={s.field}>
					<textarea ref={getPostElement}/>
				</div>
				<div className={s.button}>
					<button onClick={addPost}>Add post</button>
				</div>
			</div>
		</div>
	);
};

export default FormMessage;
