import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Player1 from '../pages/Player1';
var player;

class SelectPlayer extends Component {
    
    render() {
        const routePlayer1 = () => {
            ReactDOM.render(
                <Player1 />,
                document.getElementById('root')
            );
        }
    return (

        <div className="row">
            <div className="input-field col s12">

                <div className="row">
                    <a href="/player1">
                        <span>Patti</span>
                    </a>
                </div>
                <div className="row">
                    <a href="/player2">
                        <span>Tim</span>
                    </a>
                </div>
                <div className="row">
                    <a href="/player3">
                        <span>Kristi</span>
                    </a>
                </div>
                <div className="row">
                    <a href="/player4">
                        <span>Jon</span>
                    </a>
                </div>

            </div>
        </div>
    );
}
}

export default SelectPlayer;