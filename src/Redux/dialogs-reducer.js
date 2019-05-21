const UPDATE_NEW_MESS_TEXT = 'UPDATE-NEW-MESS-TEXT';
const ADD_MESS = 'ADD-MESS';

const dialogsReducer = (state, action) => {


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
