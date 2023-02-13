import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Box from './Box'
import store from './store'

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Box />
    </React.StrictMode>
  </Provider>
);
