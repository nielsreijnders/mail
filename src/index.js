import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Order from './emails/Order'
import * as fs from 'fs';

ReactDOM.render(
  <React.StrictMode>
    <h1>Hi</h1>
    <Order />
  </React.StrictMode>,
  document.getElementById('root')
);


setTimeout(() => {
  console.log(fs)

},500)

// function saveEmail(email) {
//   return new Promise((resolve, reject) => {
//     fs.writeFile('order.html', email, (err) => {
//       if (err) return reject(err);
//       return resolve();
//     });
//   });
// }





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
