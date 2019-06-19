import React from "react";
import {addPostActionCreator, updateNewPostTextCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import connect from "react-redux/es/connect/connect";


let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
};
let mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostText: (text) => {
			let action = updateNewPostTextCreator(text);
			dispatch(action);
		},
		addPost: () => {
			dispatch(addPostActionCreator());
		}
	}
};
const SuperPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default SuperPostsContainer;
