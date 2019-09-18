const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
	messages: [
		{id: 1, message: 'Yo-yo'},
		{id: 2, message: 'Hello world'},
		{id: 3, message: 'How are you?'},
		{id: 4, message: 'bang bang'},
		{id: 5, message: 'hello hello hello'}
	],

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
		case SEND_MESSAGE:
			let text = action.newMassageBody;
			return {
				...state,
				messages: [...state.messages, {id: 6, message: text}]
			};
	}

	return state;
};

export const addMessActionCreator = (newMassageBody) => ({type: SEND_MESSAGE, newMassageBody});

export default dialogsReducer;
