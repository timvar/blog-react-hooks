/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

const Login = ({ dispatch }) => {
  const [username, setUsername] = useState('');
  const handlesubmit = e => {
    e.preventDefault();
    dispatch({ type: 'LOGIN', username });
  };
  const handleUsername = e => {
    setUsername(e.target.value);
  };

  return (
    <form onSubmit={e => handlesubmit(e)}>
      <label htmlFor="login-username">Username:</label>
      <input
        type="text"
        name="login-username"
        id="login-username"
        value={username}
        onChange={handleUsername}
      />
      <label htmlFor="login-password">Password:</label>
      <input
        type="password"
        name="login-password"
        id="login-password"
      />
      <input
        type="submit"
        value="Login"
        disabled={username.length === 0}
      />
    </form>
  );
};

export default Login;
