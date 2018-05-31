import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Player1 from './components/Player1';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Player1 />
        
      </div>
    );
  }
}

export default App;
