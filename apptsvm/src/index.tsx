import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Hello from './components/Hello';
import MyText from './components/MyText';
import MyMessage from './components/MyMessage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Hello />
    <MyText content='given props as string arg in MyText' />
    <MyMessage />
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



