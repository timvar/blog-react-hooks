import React from 'react';

const Logout = ({ user, dispatch }) => {
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
