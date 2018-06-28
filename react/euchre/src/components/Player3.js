import React, { Component } from 'react';
import Header from './Header';
import { player3, trumpCard } from './gameLogic'
// import default from '../App';

function DealerCheck() {
  if (player3.isDealer) {
    return  <a className="waves-effect waves btn">I'll Pick it up</a>;
  } else return <a className="waves-effect waves btn">You can pick it up</a>;
}

class Player3 extends Component {
   render() {
      return (
        
         <div className = "container">
          <Header />
          <div className="row">
          <img
            src={player3.card1.image}
          />
          <img
            src={player3.card2.image}
          />
          <img
            src={player3.card3.image}
          />
          <img
            src={player3.card4.image}
          />
          <img
            src={player3.card5.image}
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

export default Player3;