import './App.css';

import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { LoginPage } from './LoginPage';
import { FailedPage } from './FailedPage';
import HomePage from './HomePage';

import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

function AppMain() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path={'/'} element={<LoginPage />} />
          <Route path={'/loginfailed'} element={<FailedPage />} />
          <Route path={'/home'} element={<HomePage />} />

          <Route path={'/page1'} element={<Page1 />} />
          <Route path={'/page2'} element={<Page2 />} />
          <Route path={'/page3'} element={<Page3 />} />

        </Routes>
      </div>   
    </BrowserRouter>
  );
}

export default AppMain;
