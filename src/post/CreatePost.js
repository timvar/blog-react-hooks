/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from 'react';
import { StateContext } from '../contexts';

const CreatePost = () => {
  const { state, dispatch } = useContext(StateContext);
  const { user } = state;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const handleTitle = e => {
    setTitle(e.target.value);
  };
  const handleContent = e => {
    setContent(e.target.value);
  };

  const handleCreate = e => {
    e.preventDefault();
    dispatch({ type: 'CREATE_POST', title, content, author: user });
  };

  return (
    <form onSubmit={e => handleCreate(e)}>
      <div>
        Author: <b>{user}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input
          type="text"
          name="create-title"
          id="create-title"
          value={title}
          onChange={handleTitle}
        />
      </div>
      <textarea value={content} onChange={handleContent} />
      <input type="submit" value="Create" />
    </form>
  );
};

export default CreatePost;
