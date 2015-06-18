'use strict';

import React from 'react';
import Router from 'react-router';
import ReactBootstrap from 'react-bootstrap';
import ReactRouterBootstrap from 'react-router-bootstrap';

import Desk from './desk/desk.js';
import Issue from './issue/issue.js';
import {Search} from './search/search.js';


require('../less/main.less');

const appNode = document.getElementById("app");

var {
  Route,
  Redirect,
  RouteHandler
  } = Router;

var {
  NavItemLink
  } = ReactRouterBootstrap;

var {
  Nav,
  Navbar
  } = ReactBootstrap;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Navbar brand={<a href="#">HeroesDesk</a>}>
          <Nav>
            <NavItemLink to="desk">Desk</NavItemLink>
            <NavItemLink to="search">Search</NavItemLink>
          </Nav>
        </Navbar>
        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route handler={App}>
    <Redirect from="/" to="/issues"/>
    <Redirect from="/desk" to="/issues"/>
    <Route name="desk" path="issues" handler={Desk}/>
    <Route name="issue" path="issues/:issueId" handler={Issue}/>
    <Route name="search" path="search" handler={Search}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, appNode);
});


