import React from 'react';
import Home from './pages/Home';
import { useRoutes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { store } from './redux/store';
import routes from './routes';

const App = () => {
  const content = useRoutes(routes);

  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="Crypto Exchange"
        defaultTitle="Crypto Exchange"
      />
      <Provider store={store}>
        {content}
      </Provider>
    </HelmetProvider>
  );
}

export default App;
