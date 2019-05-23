const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
	newPostText: 'Hello boy!'
};

const profileReducer = (state = initialState , action) => {

	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 6,
				post: state.newPostText,
				likesCount: 0
			};
			state.posts.push(newPost);
			state.newPostText = '';
			break;
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;
			break;
	}
	return state;
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextCreator = (text) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newText: text
	}
};

export default profileReducer;