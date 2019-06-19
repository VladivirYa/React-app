import React from 'react';
import Dialogs from "./Dialogs";
import {addMessActionCreator, updateNewMessTextCreator} from "../../Redux/dialogs-reducer";
import connect from "react-redux/es/connect/connect";


let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
		newMessText: state.dialogsPage.newMessText
	}
};
let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessTextCreator: (text) => {
			let action = updateNewMessTextCreator(text);
			dispatch(action);
		},
		addMess: () => {
			dispatch(addMessActionCreator());
		}
	}
};

const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default SuperDialogsContainer;