import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import '../../../styles/style.css';

alert('привет406');

console.log(process.env.NODE_ENV);
console.log(process.env.DEBUG);
if (process.env.NODE_ENV === 'production') {
  console.log('Welcome to production');
}
if (process.env.DEBUG) {
  console.log('Debugging output');
}


ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

