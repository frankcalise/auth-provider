import React from "react";
import auth0 from 'auth0-js'
import {AUTH_CONFIG} from 'auth0-vars.js'

const auth0 = new auth0.WebAuth({
  domain: AUTH_CONFIG.domain,
  clientID: AUTH_CONFIG.clientId,
  redirectUri: AUTH_CONFIG.callbackUrl,
  audience: `${AUTH_CONFIG.domain}/userinfo`,
  responseType: "token id_token",
  scope: "openid",
})

function Login() {
  function handleSubmit(e) {
    e.preventDefault();
    
  }
  return (
    <div>
      <form>
        <input name="username" />
        <br />
        <input name="password" type="password" />
        <br />
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
}

export default Login;
