import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage'

function Greeting(props) {
    let username = "Jon";
    
    const isLoggedIn = props.isLoggedIn;
    console.log(props);
    if (isLoggedIn) {
      return <li><a>Welcome, {username}</a></li>
    }
    return <li><a className="waves-effect waves-light btn" onClick={loginPage}>Create Account</a></li>
  }

function loginPage() {
    ReactDOM.render(
        <LoginPage />,
        document.getElementById('root')
      );
}

  export default Greeting;