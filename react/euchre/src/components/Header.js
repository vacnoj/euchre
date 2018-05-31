import React, { Component } from 'react';
// import default from '../App';

class Header extends Component {
   render() {
      return (
        <nav>
            <div className="nav-wrapper blue">
                <a href="#" className="brand-logo center">Euchre!</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><a className="waves-effect waves-light btn modal-trigger" href="#createAccountModal">Create Account</a></li>
                </ul>
            </div>
        </nav>
      );
   }
}

export default Header;