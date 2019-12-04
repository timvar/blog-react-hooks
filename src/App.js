import React, { useReducer, useEffect } from 'react';
import UserBar from './user/UserBar';
import CreatePost from './post/CreatePost';
import PostList from './post/PostList';
import appReducer from './reducers';

const defaultPosts = [
  {
    title: 'React Hooks',
    content: 'The greatest thing since sliced bread!',
    author: 'Daniel Bugl',
  },
  {
    title: 'Using React Fragments',
    content: 'Keeping the DOM tree clean!',
    author: 'Daniel Bugl',
  },
];

function App() {
  const [state, dispatch] = useReducer(appReducer, {
    user: '',
    posts: defaultPosts,
  });
  const { user, posts } = state;
  useEffect(() => {
    document.title = user
      ? `${user} - React Hooks Blog `
      : 'React Hooks Blog';
  }, [user]);
  return (
    <div style={{ padding: 8 }}>
      <UserBar user={user} dispatch={dispatch} />
      {user && (
        <CreatePost user={user} posts={posts} dispatch={dispatch} />
      )}
      <PostList posts={posts} />
    </div>
  );
}

export default App;
