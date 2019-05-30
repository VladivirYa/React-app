import React from 'react';
import Dialogs from "./Dialogs";
import {addMessActionCreator, updateNewMessTextCreator} from "../../Redux/dialogs-reducer";


const DialogsContainer = (props) => {
 debugger;
	let state = props.store.getState().dialogsPage;

	let addMess = () => {
		props.store.dispatch(addMessActionCreator());
	};

	let onMessChange = (text) =>{
		let action = updateNewMessTextCreator(text);
		props.store.dispatch(action);
	};

	return (<Dialogs addMess={addMess} updateNewMessTextCreator={onMessChange} dialogsPage={state}/>);
};

export default DialogsContainer;