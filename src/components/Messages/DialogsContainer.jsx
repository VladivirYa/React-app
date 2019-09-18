import React from 'react';
import Dialogs from "./Dialogs";
import {addMessActionCreator} from "../../Redux/dialogs-reducer";
import connect from "react-redux/es/connect/connect";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
		newMessText: state.dialogsPage.newMessText
	}
};


let mapDispatchToProps = (dispatch) => {
	return {
		sendMess: (newMassageBody) => {
			dispatch(addMessActionCreator(newMassageBody));
		}
	}
};


// let AuthRedirectComponent = withAuthRedirect(Dialogs);
//
// const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs);