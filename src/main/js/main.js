'use strict';

import React from 'react';
import Router from 'react-router';

import Desk from './desk/desk.js';
import {Search} from './search/search.js';
import {I18n} from './i18n/i18n.js';

import {getTranslation} from './translation.js';

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
            <li><Link to="i18n">I18n</Link></li>
          </ul>
        </header>
        <RouteHandler/>
      </div>
    );
  }
});

var locale = "en";
var I18nWrapper = React.createClass({
  render: function () {
    var translation = getTranslation(locale);
    return (
        <I18n text1="I come from main.js" {...translation} />
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Redirect from="/" to="desk" />
    <Route name="desk" handler={Desk}/>
    <Route name="search" handler={Search}/>
    <Route name="i18n" handler={I18nWrapper}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, appNode);
});


