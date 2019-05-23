const UPDATE_NEW_MESS_TEXT = 'UPDATE-NEW-MESS-TEXT';
const ADD_MESS = 'ADD-MESS';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {


	switch (action.type) {
		case ADD_MESS:
			let newMess = {
				id: 6,
				message: state.newMessText
			};
			state.messages.push(newMess);
			state.newMessText = '';
			break;
		case UPDATE_NEW_MESS_TEXT:
			state.newMessText = action.newText;
			break;
	}

	return state;
};

export const addMessActionCreator = () => ({type: ADD_MESS});

export const updateNewMessTextCreator = (text) => ({type: UPDATE_NEW_MESS_TEXT, newText: text});

export default dialogsReducer;
