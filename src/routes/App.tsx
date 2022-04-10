import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import routesConfig from './config';
import { hot } from 'react-hot-loader/root';
import { Layout } from '../Layout';

export const App = hot(() => (
  <BrowserRouter>
    <Layout>
      <Switch>
        {routesConfig.map((routeProps) => (
          <Route {...routeProps} />
        ))}
      </Switch>
    </Layout>
  </BrowserRouter>
));
