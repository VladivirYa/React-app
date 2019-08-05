import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Messages/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";



const App = (props) => {
	return (
			<div className='app-wrapper'>
				<HeaderContainer/>
				<Navbar state={props.state.navBar}/>
				<div className='app-wrapper-content'>
					<Route path='/messages' render={ () => <DialogsContainer/>}/>
					<Route path='/profile/:userId?' render={ () => <ProfileContainer/>}/>
					<Route path='/users' render={ () => <UsersContainer/>}/>

					<Route path='/news' component={News}/>
					<Route path='/Settings' component={Settings}/>
					<Route path='/Music' component={Music}/>
				</div>
			</div>
	);
};

export default App;