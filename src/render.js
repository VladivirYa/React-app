import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMess, addPost, updateNewMessText, updateNewPostText} from './Redux/state';
import {BrowserRouter} from "react-router-dom";


export let rerenderEntireTree = (state)=>{
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} updateNewMessText={updateNewMessText} addMess={addMess}/>
		</BrowserRouter>, document.getElementById('root')
	);
};