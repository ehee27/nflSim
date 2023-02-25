import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
const root = createRoot(document.getElementById('root'));
import store from './store';

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
