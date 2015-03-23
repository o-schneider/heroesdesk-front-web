/** @jsx React.DOM */

//$ = jQuery = require('jquery');
//var Bootstrap = require('react-bootstrap');
//var bootstrap = require('bootstrap');   // On devra passer via React-bootstrap si on utilise React

var MainNavbar = React.createClass({
    render: function(){
        return  <ul className="nav navbar-nav navbar-left">
                    <li className="active"><a href="index.html">Desk</a></li>
                    <li><a href="#">Search</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Activity</a></li>
                </ul>
    }
}) ;

var Login = React.createClass({
    render: function() {
        return  <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">HerosName<span className="caret"></span></a>
                        <ul className="dropdown-menu" role="menu">
                            <li><a href="#">Account</a></li>
                            <li className="divider"></li>
                            <li><a href="#">Logout</a></li>
                        </ul>
                    </li>
                </ul>
    }
});

var Search = React.createClass({
    render: function() {
        return  <form className="navbar-form navbar-right" role="search">
                    <div classNmae="form-group">
                        <input type="text" className="form-control" placeholder="Search"/>
                        <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
                    </div>
                </form>;
    }
});

var HeroesHeader = React.createClass({
    render: function() {
        return  <header role="banner">
                    <nav role="navigation" className="navbar navbar-static-top navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand navbar-left" href="index.html">Heroes Desk</a><p className="navbar-text visible-xs-block">Desk (todo wire through React)</p>
                            </div>
                            <div className="navbar-collapse collapse">

                                <MainNavbar />
                                <Login />
                                <Search />
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
