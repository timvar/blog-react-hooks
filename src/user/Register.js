/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext, useEffect } from 'react';
import { useResource } from 'react-request-hook';
import { StateContext } from '../contexts';

const Register = () => {
  const { dispatch } = useContext(StateContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [user, register] = useResource((username, password) => ({
    url: '/users',
    method: 'post',
    data: { username, password },
  }));
  useEffect(() => {
    if (user && user.data) {
      dispatch({ type: 'REGISTER', username: user.data.username });
    }
  }, [user]);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'REGISTER', username });
  };
  const handleUsername = e => {
    setUsername(e.target.value);
  };
  const handlePassword = e => {
    setPassword(e.target.value);
  };
  const handlePasswordRepeat = e => {
    setPasswordRepeat(e.target.value);
  };
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        register(username, password);
      }}
    >
      <label htmlFor="register-username">Username:</label>
      <input
        type="text"
        name="register-username"
        id="register-username"
        value={username}
        onChange={handleUsername}
      />
      <label htmlFor="register-password">Password:</label>
      <input
        type="password"
        name="register-password"
        id="register-password"
        value={password}
        onChange={handlePassword}
      />
      <label htmlFor="register-password-repeat">
        Repeat password:
      </label>
      <input
        type="password"
        name="register-password-repeat"
        id="register-password-repeat"
        value={passwordRepeat}
        onChange={handlePasswordRepeat}
      />
      <input
        type="submit"
        value="Register"
        disabled={
          username.length < 3 ||
          password.length < 3 ||
          password !== passwordRepeat
        }
      />
    </form>
  );
};

export default Register;
