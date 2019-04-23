import React from "react";
import s from "./Profile.module.scss";
import User_info from "./User_inform/User_info";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
	return (
		<div>
			<User_info us="Jony Boy"/>
			<MyPosts/>
		</div>
	);
};

export default Profile;
