import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router';

function App() {

  const testEnv = ()=> { 
    console.log(`Environment: ${process.env.REACT_APP_ENV}`);
    return(<></>)
  }

  return (
    <div className="App">{testEnv()}
      <Outlet />
    </div>
  );
}

export default App;
