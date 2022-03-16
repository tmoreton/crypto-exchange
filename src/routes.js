import React from 'react';

// All pages that rely on 3rd party components (other than Bootstrap) are
// loaded asynchronously, to keep the initial JS bundle to a minimum size

// Pages
import Home from './pages/Home';
import Details from './pages/Details';

const routes = [
  {
    path: '/',
    children: [
      {
        path: '/exchanges',
        element: <Home />,
      },
      {
        path: '/exchanges/:id',
        element: <Details />,
      },
    ],
  },

];

export default routes;
