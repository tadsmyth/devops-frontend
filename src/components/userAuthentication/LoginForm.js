import React from "react";

function LoginForm(props) {
  return (
    <>
      <form>
        <h2>Member Login</h2>

        <p>Username or Email </p>
        <input
          type="text"
          id="email"
          placeholder="Enter Username or Email"
        />

        <p>Password </p>
        <input
          type="text"
          id="password"
          placeholder="Enter Password"
        />

        <input type="checkbox" /> Show Password
        <button>Log In</button>
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
