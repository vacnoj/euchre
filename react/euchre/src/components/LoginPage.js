import React from 'react';

const LoginPage = () => {
    return(
      <div className="container">
        <div className="row">
          <div className="input-field col s12">
          <form action>
            <p>
              <label>
                <input name="player" type="radio" />
                <span>Patti</span>
              </label>
            </p>
            <p>
              <label>
                <input name="player" type="radio" />
                <span>Tim</span>
              </label>
            </p>
            <p>
              <label>
                <input name="player" type="radio" />
                <span>Kristi</span>
              </label>
            </p>
            <p>
              <label>
                <input name="player" type="radio" />
                <span>Jon</span>
              </label>
            </p>
          </form>
          </div>
        </div>
      </div>
    )
};

export default LoginPage;