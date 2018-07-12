import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Booking from './components/Booking/Booking';

/* json-server --watch db.json */

class App extends Component {
  render() {
    return (
      <div className="App">
          <Sidebar />
      </div>
    );
  }
}

export default App;
