import React from "react";
import User_info from "./User_inform/User_info";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

	return (
		<div>
			{/*components*/}
			<User_info profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
			<MyPostsContainer/>
			{/*components end*/}
		</div>
	);
};

export default Profile;
