import React from 'react';

// All pages that rely on 3rd party components (other than Bootstrap) are
// loaded asynchronously, to keep the initial JS bundle to a minimum size

// Pages
import Home from './pages/Home';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  // {
  //   path: '*',
  //   element: <Page404 />,
  // },
];

export default routes;
