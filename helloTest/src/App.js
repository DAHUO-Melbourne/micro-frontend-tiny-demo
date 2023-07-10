// helloReact/src/App.js
import React from 'react';
import { Switch, Route, Router, Link } from 'react-router-dom'

const helloWorld = () => (<div>Hello Test World!</div>)
const helloReact = () => (<div>Hello Test!</div>)

export default ({ history }) => {
    return <div>
        <Router history={history}>
            <Switch>
                <Route path="/react" component={helloReact} />
                <Route path="/" component={helloWorld} />
            </Switch>
            <br />
            <Link to='/react'>Say hello to Test!</Link>
            <br />
            <Link to='/'>Say hello to the World Test!</Link>
        </Router>
    </div>
}
