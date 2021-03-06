import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Home from 'containers/home';
// import 'normalize.css/normalize.css';


const renderApp = () => render(
  <AppContainer>
    <Home />
  </AppContainer>,
  document.getElementById('root'),
);

renderApp();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept(() => renderApp());
}
