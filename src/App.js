import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Messages/Dialogs";
import News from "./components/News/News";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";


const App = () => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/messages' component={Dialogs} />
                <Route path='/profile' component={Profile} />
                <Route path='/news' component={News} />
                {/*<News/>*/}
                {/*<Dialogs/>*/}
                {/*<Profile/>*/}
                <Route path='/Music' component = {Music}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;