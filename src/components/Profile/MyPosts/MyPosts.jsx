import React from "react";
import s from "./MyPosts.module.scss"
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);
// const minLength2 = minLengthCreator(3);
const addPostsForm = (props) =>{
	return (
		<form onSubmit={props.handleSubmit}>
			<div className={s.field}>
			 <Field component={Textarea} name="newPostsBody" placeholder="Post message" validate={[required, maxLength10]}/>
			</div>
			<div className={s.button}>
				<button type="submit" className="ui primary button">Add post</button>
			</div>
		</form>
	)
};

const AddPostsReduxForm = reduxForm({form: 'profileAddPostsForm'})(addPostsForm);

const MyPosts = (props) => {

	let postsElement = props.posts.map((p)=> <Post post={p.post} likesCount ={p.likesCount} key={p.id}/>);

	let addNewPost =(values) =>{
		props.sendPost(values.newPostsBody);
	};

	return (
		<div className={s.post}>
			<div className={s.title}>
				<h3>My posts</h3>
			</div>
			<div className={s.post__wrap}>
				<AddPostsReduxForm onSubmit={addNewPost}/>
			</div>
			<div className={s.posts}>
				{postsElement}
			</div>
		</div>
	);
};
export default MyPosts;
