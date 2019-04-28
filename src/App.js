import React from "react";
import { Router, Link } from "@reach/router";
import Login from './Login'
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> <Link to="dashboard">Dashboard</Link>
      </nav>
      <Router>
        <Home path="/" />
        <Login path="login" />
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

const Callback = () => (
  <div><h2>Logging In</h2></div>
)

export default App;
