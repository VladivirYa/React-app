import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

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
	newPostText: 'Hello boy!',
	profile: null
};

const profileReducer = (state = initialState , action) => {

	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 6,
				post: state.newPostText,
				likesCount: 0
			};
			 return {
				...state,
				posts: [...state.posts, newPost],
			   newPostText: ''
			};

		case UPDATE_NEW_POST_TEXT:
			 return {
			 	...state,
			   newPostText: action.newText
			 };
		case SET_USERS_PROFILE:
			return {
				...state,
				profile: action.profile
			};
	}
	return state;
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE , profile});

export const getUsersProfile = (userId) =>(dispatch) =>{
	usersAPI.getProfile(userId).then(response => {
		dispatch(setUsersProfile(response.data));
	});
}

export const updateNewPostTextCreator = (text) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newText: text
	}
};

export default profileReducer;