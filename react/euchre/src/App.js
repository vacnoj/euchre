import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Player1 from './components/Player1';
import Player2 from './components/Player2';
import Player3 from './components/Player3';
import Player4 from './components/Player4';
import LoginPage from './components/LoginPage';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: false,
      player2: false,
      player3: false,
      player4: false,
    }
  }
  render() {
    if (this.state.player1.isLoggedIn) {
      return (
        <div className="App">
          <Player1 />
          {/* <Player2 />
          <Player3 />
          <Player4 /> */}
        </div>
      )
    }
    return (
      <LoginPage />
    );
  }
}

export default App;
