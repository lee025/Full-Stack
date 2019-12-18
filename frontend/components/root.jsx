import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';
// import Home from './home_page/home_page';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
      {/* <Home /> */}
    </HashRouter>
  </Provider>
);

export default Root;

