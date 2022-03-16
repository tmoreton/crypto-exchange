import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import createStore from './redux/store';
import routes from './routes';
import Navigation from './components/Navigation';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  const content = useRoutes(routes);
  const { store, persistor } = createStore();

  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="Crypto Exchange"
        defaultTitle="Crypto Exchange"
      />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigation />
          {content}
        </PersistGate>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
