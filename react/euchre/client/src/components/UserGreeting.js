import React from 'react';

function UserGreeting(props) {
    let username = "Jon";
    
    const isLoggedIn = props.isLoggedIn;
    console.log(props);
    if (isLoggedIn) {
      return <li><a>Welcome, {username}</a></li>
    }
    return <li><a id="select-player" className="waves-effect waves-light btn" href="/">Select Player</a></li>
  }



  export default UserGreeting;