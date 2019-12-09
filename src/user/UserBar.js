import React, { useContext } from 'react';
import { StateContext } from '../contexts';
import Login from './Login';
import Logout from './Logout';
import Register from './Register';

const UserBar = () => {
  const { state } = useContext(StateContext);
  const { user } = state;
  return user ? (
    <Logout />
  ) : (
    <>
      <Login />
      <Register />
    </>
  );
};

export default UserBar;
