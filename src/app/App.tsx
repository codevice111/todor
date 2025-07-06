import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
