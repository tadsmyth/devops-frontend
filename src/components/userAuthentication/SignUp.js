import React from 'react';

function SignUp(props) {
    return (
        <>

        <h2>Sign Up</h2>
        
        <p>Full Name </p>
        <input
          type="text"
          id="fullName"
          placeholder=""
        />

        <p>Email </p>
        <input
          type="text"
          id="email"
          placeholder=""
        />

        <p>Username </p>
        <input
          type="text"
          id="username"
          placeholder=""
        />

        <p>Password </p>
        <input
          type="text"
          id="password"
          placeholder=""
        />
        <p>Confirm Password </p>
        <input
          type="text"
          id="confirmPassword"
          placeholder=""
        />

        <button>Sign Up</button>

        {/* Will be a link */}
        <p>I'm already a member Login</p>
        <button>Sign in</button>
        </>
    );
}

export default SignUp;