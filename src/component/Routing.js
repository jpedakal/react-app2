import React from 'react';
import Home from './Home';
import Profile from './Profile';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Routing = () => {
    return (
        <BrowserRouter>
            <div>
                <nav classNameName="navbar navbar-inverse">
                    <div classNameName="container-fluid">
                        <div classNameName="navbar-header">
                            <a className="navbar-brand" href="#">Employee Management</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                        </ul>
                    </div>
                </nav>
                <Route exact path="/" component={Home}></Route>
                <Route path="/profile" component={Profile}></Route>
            </div>
        </BrowserRouter>
    )
}


export default Routing;