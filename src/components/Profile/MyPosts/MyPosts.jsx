import React from "react";
import s from "./MyPosts.module.scss"
import Post from "./Post/Post";
import FormMessage from "./FormMessage/FormMessage";


const MyPosts = () => {

	let postData = [
		{id: 1, post: 'layer', likesCount: 15},
		{id: 2, post: 'Hello world', likesCount: 22}
	];
	return (
		<div className={s.post}>
			<FormMessage/>
			<div className={s.posts}>
				<Post mess={postData[0].post} likesCount={postData[0].likesCount}/>
				<Post mess={postData[1].post} likesCount={postData[1].likesCount}/>

			</div>
		</div>
	);
};
export default MyPosts;
