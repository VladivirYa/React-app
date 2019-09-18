import {usersAPI} from "../api/api";
import {profileAPI} from "../api/api";


const SEND_POST = 'SEND-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';


// Параметры по умолчанию

// let sum = (a = 1, b ) => {
// 	return a + b;
// }
// console.log(sum(3,4));

let initialState = {
	posts: [
		{id: 1, post: 'layer', likesCount: 15},
		{id: 2, post: 'Hello world', likesCount: 22},
		{id: 3, post: 'Hello world', likesCount: 22},
		{id: 4, post: 'yo yoy oy oy o yo y oy', likesCount: 22},
		{id: 5, post: 'hello hello hello', likesCount: 22},
	],
	profile: null,
	status: ""
};

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case SEND_POST:
			let newPost = {
				id: 6,
				post: action.newPostsBody,
				likesCount: 0
			};
			return {
				...state,
				posts: [...state.posts, newPost],
			};
		case SET_STATUS:
			return {
				...state,
				status: action.status
			};
		case SET_USERS_PROFILE:
			return {
				...state,
				profile: action.profile
			};
	}
	return state;
};

export const addPostActionCreator = (newPostsBody) => ({type: SEND_POST, newPostsBody});
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUsersProfile = (userId) => (dispatch) => {
	usersAPI.getProfile(userId).then(response => {
		dispatch(setUsersProfile(response.data));
	});
};

export const getUsersStatus = (userId) => (dispatch) => {
	profileAPI.getStatus(userId).then(response => {
		dispatch(setStatus(response.data));
	});
};

export const updateUserStatus = (status) => (dispatch) => {
	profileAPI.updateStatus(status).then(response => {
		if (response.data.resultCode === 0) {
			dispatch(setStatus(status));
		}
	});
};


export default profileReducer;