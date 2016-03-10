import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Home from '../components/Home';
import Main from '../components/Main';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Home} >
            <IndexRoute component={Main} />
        </Route>
    </Router>
)