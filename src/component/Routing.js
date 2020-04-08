import React from 'react';
import Home from './Home';
import Profile from './Profile';
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