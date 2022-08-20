import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Profile from './component/Profile.js'
import TableProfile from './component/TableProfile.js';
import EventHandling from './component/EventHandling.js';

// React Component
function App() {

  // JSX => Syntactical Sugar utk HTML
  return (
    <div className="App">
      <div className="container bg-dark py-3">
        <h1 style={{color:"white"}}>Belajar React JS</h1>
      </div>

      <TableProfile></TableProfile>
      
      <div className="container border rounded">
        <EventHandling></EventHandling>
      </div>
    </div>
  );
}

export default App;
