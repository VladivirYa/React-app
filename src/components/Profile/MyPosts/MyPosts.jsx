import React from "react";
import s from "./MyPosts.module.scss"
import Post from "./Post/Post";
import FormMessage from "./FormMessage/FormMessage";



const MyPosts = (props) => {


	let postsElement = props.state.map((p)=>{
	return (
		<Post mess={p.post} likesCount ={p.likesCount}/>
		);
	});

	return (
		<div className={s.post}>
			<FormMessage addPost={props.addPost}/>
			<div className={s.posts}>
				{postsElement}
			</div>
		</div>
	);
};
export default MyPosts;
