import React, { Component } from 'react';
// import default from '../App';

class Login extends Component {
   render() {
      return (
        <div>
            
        
  
    {/* <!-- Modal Structure --> */}
    <div id="createAccountModal" className="modal">
      <div className="modal-content">
        <h4>Create Account</h4>
          <div className="input-field">
            <input id="new-user" type="text" className="validate" />
            <label for="new-user">User Name</label>
          </div>
          <div className="input-field">
            <input id="new-password" type="password" className="validate" />
            <label for="new-password">Password</label>
          </div>
        </div>
      <div className="modal-footer">
        <a id="add-user" className="modal-action modal-close waves-effect waves-green btn-flat">Submit</a>
      </div>
    </div>
        <div id="login-div" className="col m8">
            <h4>Log In</h4>
      
            <form>
                <div class="input-field">
                    <input id="user-name" name="username" type="text" class="validate" />
                    <label for="user-name">User Name</label>
                </div>
                <div class="input-field">
                    <input id="user-password" name="password" type="password" class="validate" />
                    <label for="user-password">Password</label>
                </div>
            <button> <a className="waves-effect waves-green btn-flat" id="login">login</a></button></form>
        </div>
        </div>
      );
   }
}

export default Login;