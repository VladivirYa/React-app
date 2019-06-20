import React from "react";
import s from "./MyPosts.module.scss"
import Post from "./Post/Post";




const MyPosts = (props) => {

	let postsElement = props.posts.map((p)=> <Post post={p.post} likesCount ={p.likesCount} key={p.id}/>);


	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.addPost();
	};


	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	};

	return (
		<div className={s.post}>
			<div className={s.title}>
				<h3>My posts</h3>
			</div>
			<div className={s.post__wrap}>
				<div className={s.field}>
					<textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
				</div>
				<div className={s.button}>
					<button onClick={onAddPost}>Add post</button>
				</div>
			</div>
			<div className={s.posts}>
				{postsElement}
			</div>
		</div>
	);
};
export default MyPosts;
