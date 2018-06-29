import React from 'react';
import { beginGame } from '../gameLogic'


const PickItUp = () => {

    return (
    
    <a id="call-up-button" className="waves-effect waves btn">Pick it up</a>

    );

}

const Pass = () => {
    return (
        <a id="pass-button" className="waves-effect waves btn">Pass</a>
    )
}

const BeginGameButton = () => {
    return(
        <a id="beginGame" onClick={beginGame} className="waves-effect waves btn">Ready</a>
    )
}

export { PickItUp, Pass, BeginGameButton };