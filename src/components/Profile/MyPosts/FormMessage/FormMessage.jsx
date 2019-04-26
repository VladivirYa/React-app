import React from "react";
import s from "./FormMessage.module.scss";
const FormMessage = () => {
	return (
		<div>
			<div className={s.title}>
				<h3>My posts</h3>
			</div>
			<div className={s.post__wrap}>
				<div className={s.fild}>
					<textarea/>
				</div>
				<div className={s.button}>
					<button>Add post</button>
				</div>
			</div>
		</div>
	);
};

export default FormMessage;
