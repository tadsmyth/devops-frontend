import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'

function Register(props) {
  const history = useHistory()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

  async function registerUser(event) {
		event.preventDefault()

  const res = await fetch('/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})
    const data = await res.json()

		if (data.status === 'ok') {
			history.push('/login')
		}
  }

    return (
        <>

        <h2>Sign Up</h2>
        
        <form onSumbit={registerUser}>
        <p>Full Name </p>
        <input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Name"
				/>
        <br />
        <p>Email </p>
        <input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>

        <p>Username </p>
        <input
          type="text"
          id="username"
          placeholder=""
        />
        <br />
        <p>Password </p>
        <input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="text"
					placeholder="Name"
				/>
        <br />
        {/* <p>Confirm Password </p>
        <input

					onChange={(e) => setConPassword(e.target.value)}
					type="text"
					placeholder="Name"
				/> */}

        {/* <br /> */}
				  <input type="submit" value="Register" />
        </form>

        {/* Will be a link */}
        <p>I'm already a member Login</p>
        <button>Sign in</button>
        </>
    );
}

export default Register;