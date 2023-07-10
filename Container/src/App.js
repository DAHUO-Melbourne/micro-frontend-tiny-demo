// container/src/App.js
import React from 'react';
import HelloReactApp from './components/HelloReactApp';
import HelloTestApp from './components/HelloTestApp';
import { Route, Switch, Router, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const Header = () => (
    <div>
        <Link to='/'>home</Link><br />
        <Link to='/test'>use test</Link>
    </div >
)

export default () => {
    return (
        <Router history={history}>
            <Header />
            <hr />
            <Switch>
                <Route path='/' exact component={HelloReactApp} />
                <Route path='/test' component={HelloTestApp} />
            </Switch>
        </Router>
    )
}
