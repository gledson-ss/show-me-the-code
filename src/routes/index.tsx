import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../pages';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path="/" exact component={Home} />
    <Route path="/message" component={Home} />
  </BrowserRouter>
);

export default Routes;
