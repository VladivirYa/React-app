import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Messages/Dialogs";
import News from "./components/News/News";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header/>
				<Navbar/>
				<div className='app-wrapper-content'>
					{/*<Route path='/messages' component={Dialogs}/>*/}
					{/*<Route path='/profile' component={Profile}/>*/}
					<Route path='/messages' component={() => <Dialogs/>}/>
					<Route path='/profile' render={() => <Profile posts={props.posts}/>}/>

					<Route path='/news' component={News}/>
					<Route path='/Settings' component={Settings}/>
					<Route path='/Music' component={Music}/>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;