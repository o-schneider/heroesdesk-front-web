/** @jsx React.DOM */

//$ = jQuery = require('jquery');
//var React = require('react');
//var bootstrap = require('bootstrap');   // On devra passer via React-bootstrap si on utilise React

var HeroesHeader = React.createClass({
    render: function() {
        return  <header role="banner">
                    <nav role="navigation" class="navbar navbar-static-top navbar-default">
                        <div class="container-fluid">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                                <a class="navbar-brand navbar-left" href="index.html">Heroes Desk</a><p class="navbar-text visible-xs-block">Desk (todo wire through React)</p>
                            </div>
                            <div class="navbar-collapse collapse">

                                <ul class="nav navbar-nav navbar-left">
                                    <li class="active"><a href="index.html">Desk</a></li>
                                    <li><a href="#">Search</a></li>
                                    <li><a href="#">Projects</a></li>
                                    <li><a href="#">Activity</a></li>
                                </ul>
                                <ul class="nav navbar-nav navbar-right">
                                    <li class="dropdown">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">HerosName<span class="caret"></span></a>
                                        <ul class="dropdown-menu" role="menu">
                                            <li><a href="#">Account</a></li>
                                            <li class="divider"></li>
                                            <li><a href="#">Logout</a></li>
                                        </ul>
                                    </li>
                                </ul>

                                <form class="navbar-form navbar-right" role="search">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Search"></input>
                                    </div>
                                    <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </header>;

    }
});

var HeroesMain = React.createClass({
    render: function() {
        return  <main role="main">
                    <div id="app">
                        <h2>In progress</h2>
                        <h2>To qualify</h2>
                        <h2>To do</h2>
                    </div>
                </main>;
    }
});

var HeroesFooter = React.createClass({
    render: function() {
        return  <footer role="contentinfo">
                    <p>
                        <small>TODO Copyright &copy; rese</small>
                    </p>
                </footer>;
    }
});



    var Ingrid = React.createClass({
    render: function() {
        return  <div>
                    <HeroesHeader />
                    <HeroesMain />
                    <HeroesFooter />
                </div>;
    }
});

React.render(<Ingrid />, mountNode);
