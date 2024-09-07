import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Hello from './components/Hello';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>
);

const myapproot = ReactDOM.createRoot(
  document.getElementById('myapproot') as HTMLElement
);
myapproot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



