import React from "react";
import s from "./MyPosts.module.scss"
import Post from "./Post/Post";
import FormMessage from "./FormMessage/FormMessage";



const MyPosts = (props) => {

	let postsElement = props.state.map((p)=>(<Post post={p.post} likesCount ={p.likesCount} key={p.id}/>));

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
