import React from 'react';
import Home from './Home';
import Profile from './Profile';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Routing = () => {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
                <Route exact path="/" component={Home}></Route>
                <Route path="/profile" component={Profile}></Route>
            </div>
        </BrowserRouter>
    )
}


export default Routing;