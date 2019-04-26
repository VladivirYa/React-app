import React from "react";
import s from "./MyPosts.module.scss"
import Post from "./Post/Post";
import FormMessage from "./FormMessage/FormMessage";


const MyPosts = (props) => {


	let postsElement = props.posts.map((p)=>{
	return (
		<Post mess={p.post} likesCount ={p.likesCount}/>
		);
	});

	return (
		<div className={s.post}>
			<FormMessage/>
			<div className={s.posts}>
				{postsElement}
			</div>
		</div>
	);
};
export default MyPosts;
