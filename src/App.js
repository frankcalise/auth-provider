import React from "react";
import { Router, Link } from "@reach/router";
import auth0 from "auth0-js";
import { AUTH_CONFIG } from "./auth0-vars.js";
import Login from "./Login";
import "./App.css";

const webAuth = new auth0.WebAuth({
  realm: "Dev-Vitralogy",
  domain: AUTH_CONFIG.domain,
  clientID: AUTH_CONFIG.clientId,
  redirectUri: AUTH_CONFIG.callbackUrl,
  responseType: "token id_token",
  scope: "openid"
});

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> <Link to="dashboard">Dashboard</Link>{" "}
        <Link to="login">Login</Link>
      </nav>
      <Router>
        <Home path="/" />
        <Login path="login" webAuth={webAuth} />
        <Dashboard path="dashboard" />
        <Callback path="callback" />
      </Router>
    </div>
  );
}

const Home = () => (
  <div>
    <h2>Welcome</h2>
  </div>
);

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
  </div>
);

const Callback = ({ location }) => {
  webAuth.parseHash({ hash: location.hash }, function(err, authResult) {
    if (err) {
      return console.log(err);
    }

    console.log(authResult.idToken)
    console.log(authResult.accessToken)
  })

  return (
    <div>
      <h2>Logging In</h2>
    </div>
  );
};
export default App;
