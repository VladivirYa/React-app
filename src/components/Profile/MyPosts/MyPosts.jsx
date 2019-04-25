import React from "react";
import s from "./MyPosts.module.scss"
import Post from "./Post/Post";
import FormMessage from "./FormMessage/FormMessage";


const MyPosts = () => {

	let posts = [
		{id: 1, post: 'layer', likesCount: 15},
		{id: 2, post: 'Hello world', likesCount: 22},
		{id: 3, post: 'Hello world', likesCount: 22},
		{id: 4, post: 'yo yoy oy oy o yo y oy', likesCount: 22},
		{id: 4, post: 'hello hello hello', likesCount: 100},

	];

	let postsElement = posts.map((p)=>(<Post mess={p.post} likesCount ={p.likesCount}/>));

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
