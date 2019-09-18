import React from "react";
import s from "./MyPosts.module.scss"
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


const addPostsForm = (props) =>{
	return (
		<form onSubmit={props.handleSubmit}>
			<div className={s.field}>
			 <Field component="textarea" name="newPostsBody" placeholder="Enter your message"/>
			</div>
			<div className={s.button}>
				<button type="submit" className="ui primary button">Add post</button>
			</div>
		</form>
	)
}

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
