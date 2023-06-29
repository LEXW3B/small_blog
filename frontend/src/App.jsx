import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

import './css/base/App.css';
import MyProvider from './context/Provider';

function App() {
  return (
    <MyProvider>
      <div className="App">
        <NavBar />
        <div className="container">
          <Outlet />
        </div>
      </div>
    </MyProvider>
  );
}

export default App;
