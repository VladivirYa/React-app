const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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

			newMessText: 'Hello!!!',

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
		if (action.type === ADD_POST) {
			let newPost = {
				id: 6,
				post: this._state.profilePage.newPostText,
				likesCount: 0
			};
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);

		} else if (action.type === 'UPDATE-NEW-POST-TEXT') {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);

		} else if (action.type === 'ADD-MESS') {
			let newMess = {
				id: 6,
				message: this._state.dialogsPage.newMessText
			};
			this._state.dialogsPage.messages.push(newMess);
			this._state.dialogsPage.newMessText = '';
			this._callSubscriber(this._state);

		} else if (action.type === 'UPDATE-NEW-MESS-TEXT') {
			this._state.dialogsPage.newMessText = action.newText;
			this._callSubscriber(this._state);
		}
	}

};

export const addPostActinoCreator = () => {
	return {
		type: ADD_POST
	}
};

export const updateNewPostTextCreator = (text) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newText: text
	}
};

export default store;
window.store = store;
// store - OOP


function Animal(name) {
	this.name = name;
	this.canWalk = true;
}

var animal = new Animal("ёжик");

console.log(animal)