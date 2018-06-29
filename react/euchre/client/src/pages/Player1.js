import React, { Component } from 'react';
import Header from '../components/Header';
import LoginPage from './LoginPage';
import { player1, trumpCard, player2, player3, player4, blankCard } from '../gameLogic'
import { PickItUp, Pass, BeginGameButton} from '../components/Controls';
import firebase from 'firebase';

function DealerCheck() {
  if (player1.isDealer) {
    return (<h4>I am Dealer</h4>);
  } 
  if (player2.isDealer) {
    return (<h4>player2 is the Dealer</h4>);
  } 
  if (player3.isDealer) {
    return (<h4>player3 is the Dealer</h4>);
  } 
  if (player4.isDealer) {
    return (<h4>player4 is the Dealer</h4>);
  } 
  //   return  <a id="call-up-button" onClick={setTrump} className="waves-effect waves btn">I'll Pick it up</a>;
  // } else return <a id="call-up-button" onClick={setTrump} className="waves-effect waves btn">You can pick it up</a>;
}

function PickingTrumpCheck() {
  if (player1.isPickingTrump) {
    return (<h4>I am choosing</h4>);
  } 
  if (player2.isPickingTrump) {
    return (<h4>player2 is choosing</h4>);
  } 
  if (player3.isPickingTrump) {
    return (<h4>player3 is choosing</h4>);
  } 
  if (player4.isPickingTrump) {
    return (<h4>player4 is choosing</h4>);
  }
}

function setTrump() {
  alert('hi');
}
class Player1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      card1: blankCard,
      card2: blankCard,
      card3: blankCard,
      card4: blankCard,
      card5: blankCard,
    }

    console.log(this.state.card1.image);
    var context = this;

    firebase.database().ref('players').child('player1/').once('value').then(function(snapshot) {
      var username = (snapshot.val().playerName) || 'Anonymous';
      var card1 = snapshot.val().card1
      console.log(card1);
      var card2 = snapshot.val().card2
      var card3 = snapshot.val().card3
      var card4 = snapshot.val().card4
      var card5 = snapshot.val().card5
       context.setState({
         name: username,
         card1: card1,
         card2: card2,
         card3: card3,
         card4: card4,
         card5: card5,
        })
      });
      
  }
 
  render() {
    
    
    
    
    if (this.state.begin) {
      
    }
    
    if (!this.state.isLoggedIn) {
      return (<LoginPage />);
    } else if (this.state.begin) {
      
      return (
        
         <div className = "container">
          <Header />
          <h3>{this.state.name}</h3>
          <div className="row">
          <img
            src={this.state.card1.image} alt="Card failed to Load"
          />
          <img
            src={this.state.card2.image} alt="Card failed to Load"
          />
          <img
            src={this.state.card3.image} alt="Card failed to Load"
          />
          <img
            src={this.state.card4.image} alt="Card failed to Load"
          />
          <img
            src={this.state.card5.image} alt="Card failed to Load"
          />
          </div>
          <h2>Do you want this to be trump?</h2>
          
          <div className="row">

          <img
            src={trumpCard.image} alt="Card failed to Load"
          />

          </div>

          <DealerCheck />
          <PickingTrumpCheck />
          <PickItUp />
          <Pass />
          <div className='row'>
            <BeginGameButton />
          </div>
         </div>
      );
   } else return(
      <div className = "container">
      <Header />
      <h3>{this.state.name}</h3>
      <div className="row">
      <img
        src={blankCard.image} alt="Card failed to Load"
      />
      <img
        src={blankCard.image} alt="Card failed to Load"
      />
      <img
        src={blankCard.image} alt="Card failed to Load"
      />
      <img
        src={blankCard.image} alt="Card failed to Load"
      />
      <img
        src={blankCard.image} alt="Card failed to Load"
      />
      </div>
      <h2 id="message"></h2>
      
      <div className="row">

      </div>
      <div className='row'>
        <BeginGameButton />
      </div>
    </div>

   );
}
}

export default Player1;