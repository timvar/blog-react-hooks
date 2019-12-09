/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { StateContext } from '../contexts';
import Post from './Post';

const PostList = () => {
  const { state } = useContext(StateContext);
  const { posts } = state;
  return (
    <div>
      {posts.map((p, i) => (
        <>
          <Post {...p} key={i} />
          <hr />
        </>
      ))}
    </div>
  );
};

export default PostList;
