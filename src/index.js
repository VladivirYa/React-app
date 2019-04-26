import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
	{id: 1, post: 'layer', likesCount: 15},
	{id: 2, post: 'Hello world', likesCount: 22},
	{id: 3, post: 'Hello world', likesCount: 22},
	{id: 4, post: 'yo yoy oy oy o yo y oy', likesCount: 22},
	{id: 4, post: 'hello hello hello', likesCount: 22},

];

ReactDOM.render(<App posts={posts}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
