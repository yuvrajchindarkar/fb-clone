import React from 'react';
import './App.css';
import Header from './Headed';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="app">
     {/* Header */}
     <Header />
     <div className='app_body'>
      
      {/* Sidebar */}
      <Sidebar/>

      {/* feed */}
      <Feed />

      </div>
    </div>
  );
}

export default App;
