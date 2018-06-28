import React, { Component } from 'react';
import UserGreeting from './UserGreeting';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {createAccount: false};
    }
      
   render() {
    if (window.location.pathname === '/' || window.location.pathname === '/login') {
        return (
            <nav>
                <div className="nav-wrapper blue">
                    <a href="/" className="brand-logo center">Euchre!</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                    </ul>
                </div>
            </nav>
        );
      } else
      return (
        <nav>
            <div className="nav-wrapper blue">
                <a href="/" className="brand-logo center">Euchre!</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                <UserGreeting />
                </ul>
            </div>
        </nav>
      );
   }
}

export default Header;