import React from "react";

function Login({webAuth}) {
  function cb(err) {
    console.log(err);
  }

  function handleSubmit(e) {
    e.preventDefault();
    webAuth.login(
      {
        username: "test",
        password: "test",
      },
      cb
    );
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
