import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Messages/Dialogs";
import News from "./components/News/News";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";



const App = (props) => {

	return (

			<div className='app-wrapper'>
				<Header/>
				<Navbar friends={props.state.navBar}/>
				<div className='app-wrapper-content'>
					<Route path='/messages' render={() => <Dialogs state={props.state.dialogsPage} state={props.state.dialogsPage}/>}/>
					<Route path='/profile' render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>

					<Route path='/news' component={News}/>
					<Route path='/Settings' component={Settings}/>
					<Route path='/Music' component={Music}/>
				</div>
			</div>
	);
};

export default App;