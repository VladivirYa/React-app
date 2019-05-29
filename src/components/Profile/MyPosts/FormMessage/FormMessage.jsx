import React from "react";
import s from "./FormMessage.module.scss";
import { addPostActionCreator, updateNewPostTextCreator} from "../../../../Redux/profile-reducer";



const FormMessage = (props) => {

	let getPostElement = React.createRef();

	let addPost = () => {
		// props.addPost();
		props.dispatch(addPostActionCreator());
	};


	let onPostChange = () => {
		let text = getPostElement.current.value;
		// props.updateNewPostText(text);
		let action = updateNewPostTextCreator(text);
		props.dispatch(action);
	};

	return (
		<div>
			<div className={s.title}>
				<h3>My posts</h3>
			</div>
			<div className={s.post__wrap}>
				<div className={s.field}>
					<textarea ref={getPostElement} onChange={onPostChange} value={props.newPostText}/>
				</div>
				<div className={s.button}>
					<button onClick={addPost}>Add post</button>
				</div>
			</div>
		</div>
	);
};

export default FormMessage;
