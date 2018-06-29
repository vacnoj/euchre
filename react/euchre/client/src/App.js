import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Welcome from './pages/Welcome';
import Player1 from './pages/Player1';
import Player2 from './pages/Player2';
import Player3 from './pages/Player3';
import Player4 from './pages/Player4';
import LoginPage from './pages/LoginPage';



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

    
  
      return (
        <Router>
        <div className="App">
          <Route exact path="/" component={Welcome} />
          <Route exact path="/player1" component={Player1} />
          <Route exact path="/player2" component={Player2} />
          <Route exact path="/player3" component={Player3} />
          <Route exact path="/player4" component={Player4} />
          <Route exact path="/login" component={LoginPage} />

        </div>
        </Router>
      )
    // }
  }
}

export default App;
