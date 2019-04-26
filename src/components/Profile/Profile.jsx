import React from "react";
import s from "./Profile.module.scss";
import User_info from "./User_inform/User_info";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {

	return (
		<div>
			{/*components*/}
			<User_info us="Jony Boy"/>
			<MyPosts posts={props.posts} />
			{/*components end*/}
		</div>
	);
};

export default Profile;
