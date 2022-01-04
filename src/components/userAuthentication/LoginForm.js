import React, { useState } from "react";
import Connection from "../../Connection";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const url = Connection;

  async function handleLoginSubmit(e) {
    e.preventDefault();

    const res = await fetch(`${url}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();

    if (data.user) {
      localStorage.setItem('token', data.user)
      alert('Login Successful')
      window.location.href = '/quote'
    } else {
      alert('Please check your username and password')
    }
    console.log("this is the login data", data);
  }

  return (
    <>
      <form onSubmit={handleLoginSubmit}>
        <h2>Member Login</h2>

        <p>Username or Email </p>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="email"
          placeholder="Email"
        />
        <br />

        <p>Password </p>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="password"
          placeholder="Password"
        />
        <br />

        <input type="checkbox" /> Show Password
        <input type="submit" value="Login" />

        <p>or sign in with</p>
        {/* will just be the icons */}
        <button>Google</button>
        <button>Facebook</button>
        <button>Github</button>
        {/* These will be links */}
        <p>Forgot Username / Password?</p>
        <p>Don't have an account? Sign up</p>
      </form>
    </>
  );
}

export default LoginForm;
