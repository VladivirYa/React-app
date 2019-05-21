import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
	_state: {
		navBar: {
			friends: [
				{
					id: 0,
					src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png',
					name: 'Ivan'
				},
				{
					id: 1,
					src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png',
					name: 'Valentin1'
				},
				{
					id: 2,
					src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png',
					name: 'Valentin2'
				}
			]
		},
		profilePage: {
			posts: [
				{id: 1, post: 'layer', likesCount: 15},
				{id: 2, post: 'Hello world', likesCount: 22},
				{id: 3, post: 'Hello world', likesCount: 22},
				{id: 4, post: 'yo yoy oy oy o yo y oy', likesCount: 22},
				{id: 5, post: 'hello hello hello', likesCount: 22},
			],
			newPostText: 'Hello boy!'
		},

		dialogsPage: {
			messages: [
				{id: 1, message: 'Yo-yo'},
				{id: 2, message: 'Hello world'},
				{id: 3, message: 'How are you?'},
				{id: 4, message: 'bang bang'},
				{id: 5, message: 'hello hello hello'}
			],

			newMessText: '',

			messages2: [
				{id: 1, message: 'How are you?'},
				{id: 2, message: 'How are you?'},
				{id: 3, message: 'How are you?'},
				{id: 4, message: 'How are you?'},
				{id: 5, message: 'How are you?'}
			],
			dialogs: [
				{id: 1, name: 'Vladimir'},
				{id: 2, name: 'Ivan'},
				{id: 3, name: 'Grigoriy'},
				{id: 4, name: 'Victor'},
				{id: 5, name: 'Roman'}
			]
		},

	},
	_callSubscriber() {
		console.log('State changed');
	},
	getState() {
		return this._state;
	},

	// addPost() {
	// 	let newPost = {
	// 		id: 6,
	// 		post: this._state.profilePage.newPostText,
	// 		likesCount: 0
	// 	};
	// 	this._state.profilePage.posts.push(newPost);
	// 	this._state.profilePage.newPostText = '';
	// 	this._callSubscriber(this._state);
	// },
	// updateNewPostText(newText) {
	// 	this._state.profilePage.newPostText = newText;
	// 	this._callSubscriber(this._state);
	// },
	// addMess() {
	// 	let newMess = {
	// 		id: 6,
	// 		message: this._state.dialogsPage.newMessText
	// 	};
	// 	this._state.dialogsPage.messages.push(newMess);
	// 	this._state.dialogsPage.newMessText = '';
	// 	this._callSubscriber(this._state);
	//
	// },
	// updateNewMessText(newText) {
	// 	this._state.dialogsPage.newMessText = newText;
	// 	this._callSubscriber(this._state);
	// },

	subscribe(observe) {
		this._callSubscriber = observe; // Наблюдатель
	},
	dispatch(action) {   // {type: 'ADD-POST'}

		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.navBar = sidebarReducer(this._state.navBar, action);

		this._callSubscriber(this._state)
	}

};

export default store;
// window.store = store;

// store - OOP
