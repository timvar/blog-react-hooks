import React from 'react';

import Login from './Login';
import Logout from './Logout';
import Register from './Register';

const UserBar = ({ user, dispatch }) => {
  return user ? (
    <Logout user={user} dispatch={dispatch} />
  ) : (
    <>
      <Login dispatch={dispatch} />
      <Register dispatch={dispatch} />
    </>
  );
};

export default UserBar;
