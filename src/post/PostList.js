/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Post from './Post';

const PostList = ({ posts = [] }) => {
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
