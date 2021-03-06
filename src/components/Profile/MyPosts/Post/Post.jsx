import React from "react";
import s from "./Post.module.scss";

const Post = (props) => {
	return (
		<div className={s.item_wrap}>
			<div className={s.item}>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png"
					alt="logo"/>
				<h3>{props.post}</h3>
			</div>
			<div className={s.like}>
				<span>likes</span> {props.likesCount}
			</div>
		</div>
	);
};
export default Post;
