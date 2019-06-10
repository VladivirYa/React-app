import React from 'react';
import Dialogs from "./Dialogs";
import {addMessActionCreator, updateNewMessTextCreator} from "../../Redux/dialogs-reducer";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

	return <StoreContext.Consumer>
		{
			(store) => {
				let state = store.getState().dialogsPage;

				let addMess = () => {
					store.dispatch(addMessActionCreator());
				};

				let onMessChange = (text) => {
					let action = updateNewMessTextCreator(text);
					store.dispatch(action);
				};
				return <Dialogs addMess={addMess}
				                updateNewMessTextCreator={onMessChange}
				                dialogsPage={state}
				                newMessText={state.newMessText}/>
			}
		}
	</StoreContext.Consumer>
};

export default DialogsContainer;