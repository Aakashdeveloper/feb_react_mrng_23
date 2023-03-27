import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import UserList from './UserList';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <div className="container">
                <Route exact path="/" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route path="/users" component={UserList}/>
                <Route path="/profile" component={Profile}/>
            </div>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing