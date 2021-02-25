import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Order from './emails/Order';

ReactDOM.render(
  <React.StrictMode>
    <Order />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
