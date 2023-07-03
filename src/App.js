import React from 'react';
import './App.css';
import Header from './Headed';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';

function App() {
  const user = null;
  return (
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
      <>
      <Header />
      <div className='app_body'>
        <Sidebar/>
        <Feed />
        </div>
      </>
      )}
    </div>
  );
}

export default App;
