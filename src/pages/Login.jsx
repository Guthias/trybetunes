import React, { Component } from 'react';
import Loading from '../components/Loading';

export default class Login extends Component {
  render() {
    return (
      <>
        <Loading />
        <div data-testid="page-login" className="page-login">
          <form className="login-form">
            <h1 className="login-title">Guthify</h1>
            <input
              type="text"
              id="username-input"
              data-testid="login-name-input"
              placeholder="Nome de Usuario"
              className="login-input"
            />
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      </>
    );
  }
}
