'use strict';

import React from 'react';
import Router from 'react-router';

import Desk from './desk/desk.js';
import {Search} from './search/search.js';

const appNode = document.getElementById("app");

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
    render: function () {
        return (
            <div>
                <header>
                    <ul>
                        <li><Link to="desk">Desk</Link></li>
                        <li><Link to="search">Search</Link></li>
                    </ul>
                </header>
                <h1>Desk</h1>

                <RouteHandler/>
            </div>
        );
    }
});

var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="desk" handler={Desk}/>
        <Route name="search" handler={Search}/>
        <DefaultRoute handler={Desk}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, appNode);
});


