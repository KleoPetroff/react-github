import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

const routes = (
    <Router history={appHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={Home} />
          <Route path="/profile/:username" component={Profile} />
        </Route>
    </Router>
);

export default routes;