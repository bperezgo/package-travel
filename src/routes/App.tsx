import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import routesConfig from './config';
import { hot } from 'react-hot-loader/root';
import { Layout } from '../Layout';

export const App = hot(() => (
  <BrowserRouter>
    <Layout>
      <Routes>
        {routesConfig.map((routeProps) => (
          <Route {...routeProps} />
        ))}
      </Routes>
    </Layout>
  </BrowserRouter>
));
