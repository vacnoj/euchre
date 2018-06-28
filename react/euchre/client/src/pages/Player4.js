import React, { Component } from 'react';
import Header from '../components/Header';
import LoginPage from './LoginPage';
import { player1, trumpCard } from '../gameLogic'
// import default from '../App';

function DealerCheck() {
  if (player1.isDealer) {
    return  <a id="call-up-button" onClick={setTrump} className="waves-effect waves btn">I'll Pick it up</a>;
  } else return <a id="call-up-button" onClick={setTrump} className="waves-effect waves btn">You can pick it up</a>;
}

function setTrump() {
  alert('hi');
}
class Player1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    }
  }
 
   render() {

    if (!this.state.isLoggedIn) {
      return (<LoginPage />);
  } else {
    
      return (
        
         <div className = "container">
          <Header />
          <div className="row">
          <img
            src={player1.card1.image} alt="Card failed to Load"
          />
          <img
            src={player1.card2.image} alt="Card failed to Load"
          />
          <img
            src={player1.card3.image} alt="Card failed to Load"
          />
          <img
            src={player1.card4.image} alt="Card failed to Load"
          />
          <img
            src={player1.card5.image} alt="Card failed to Load"
          />
          </div>
          <h2>Do you want this to be trump?</h2>
          
          <div className="row">

          <img
            src={trumpCard.image}
          />

          </div>

          <DealerCheck />
          <a className="waves-effect waves btn">Hell No</a>
          
         </div>
      );
   }
  }
}

export default Player1;