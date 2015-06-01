'use strict';

import React from 'react';
import Router from 'react-router';

import Desk from './desk/desk.js';
import {Search} from './search/search.js';

require('../less/main.less');

const appNode = document.getElementById("app");

var {
    Route,
    Redirect,
    RouteHandler,
    Link
    } = Router;

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
        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Redirect from="/" to="desk" />
    <Route name="desk" handler={Desk}/>
    <Route name="search" handler={Search}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, appNode);
});


