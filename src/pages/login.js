import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.status === 'success') {
      localStorage.setItem('loggedIn', true);
      navigate(`/profile/${data.username}`); // Navigate to the profile page using the username
    } else {
      // Login failed
      alert(data.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <navbar />
      <label>
        Username:
        <input
          type='text'
          value={email}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <input type='submit' value='Login' />
    </form>
  );
}

export default Login;
