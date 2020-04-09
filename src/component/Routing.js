import React from 'react';
import Home from './Home';
import Profile from './Profile';
import Post from './Post';
import PostDetails from './PostDetails';
import LifeCycle from './lifecycle';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Routing = () => {
    return (
        <BrowserRouter>
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/emp">Employee Management</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/post">Post</Link></li>
                            <li><Link to="/life_cycle">LifeCycle</Link></li>
                        </ul>
                    </div>
                </nav>
                <Route exact path="/" component={Home}></Route>
                <Route path="/profile" component={Profile}></Route>
                <Route path="/post" component={Post}></Route>
                <Route path="/posts/:topic" component={PostDetails}></Route>
                <Route path="/life_cycle" component={LifeCycle}></Route>
            </div>
        </BrowserRouter>
    )
}


export default Routing;