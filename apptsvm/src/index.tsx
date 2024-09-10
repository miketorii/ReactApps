import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Hello from './components/Hello';
import MyText from './components/MyText';
import MyMessage from './components/MyMessage';
import MyCounter from './components/MyCounter';
import MyDoubleCounter from './components/MyDoubleCounter';
import MyParent from './components/MyParent';
import MyClock from './components/MyClock';
import MyMemo from './components/MyMemo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Hello />
    <MyText content='given props as string arg in MyText' />
    <MyMessage />
    <MyCounter initialCount={0} />
    <MyDoubleCounter initialCount={0} />
    <MyParent />
    <MyClock />
    <MyMemo />    
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



