import React, { useState } from 'react';

function Register() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rut_compania, setRutCompania] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre,
        email,
        password,
        rut_compania,
      }),
    });

    const data = await response.json();

    if (data.status === 'success') {
      localStorage.setItem('loggedIn', true);
    } else {
      // Registration failed
      alert(data.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type='text'
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label>
        Company RUT:
        <input
          type='number'
          value={rut_compania}
          onChange={(e) => setRutCompania(e.target.value)}
        />
      </label>
      <input type='submit' value='Register' />
    </form>
  );
}

export default Register;
