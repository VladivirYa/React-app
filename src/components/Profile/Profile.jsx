import React from "react";
import s from "./Profile.module.scss";
import User_info from "./User_inform/User_info";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = () => {

	return (
		<div>
			{/*components*/}
			<User_info us="Jony Boy"/>
			<MyPostsContainer/>
			{/*components end*/}
		</div>
	);
};

export default Profile;
