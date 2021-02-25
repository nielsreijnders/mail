import React from 'react';
import ReactDOM from 'react-dom';
import Order from './emails/Order';
import './styles/main.css'

ReactDOM.render(
  <React.StrictMode>
    <Order />
  </React.StrictMode>,
  document.getElementById('root'),
);