import React from 'react';
import Dialogs from "./Dialogs";
import {addMessActionCreator, updateNewMessTextCreator} from "../../Redux/dialogs-reducer";
import connect from "react-redux/es/connect/connect";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


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

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default SuperDialogsContainer;