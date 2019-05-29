import React from 'react';
import history from '../core/utilities/history';

import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import Layout from '../components/common/layout';
import NotFound from '../components/error/NotFound';
import Home from '../containers/home';

const Router = () => 
  <ConnectedRouter history={history}>
    <Switch>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </Layout>
      <Route component={NotFound}/>
    </Switch>
  </ConnectedRouter>

export default Router;
