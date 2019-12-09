import React, { useContext } from 'react';
import { StateContext } from '../contexts';

const Logout = () => {
  const { state, dispatch } = useContext(StateContext);
  const { user } = state;
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'LOGOUT' });
  };
  return (
    <form onSubmit={e => handleSubmit(e)}>
      Logged in as: <b>{user}</b>
      <input type="submit" value="Logout" />
    </form>
  );
};

export default Logout;
