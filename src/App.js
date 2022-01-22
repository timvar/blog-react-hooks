import React, { useReducer, useEffect, useState } from 'react';
import { useResource } from 'react-request-hook';
import UserBar from './user/UserBar';
import CreatePost from './post/CreatePost';
import PostList from './post/PostList';
import appReducer from './reducers';
import Header from './Header';
import ChangeTheme from './ChangeTheme';
import { ThemeContext, StateContext } from './contexts';

function App() {
  const [state, dispatch] = useReducer(appReducer, {
    user: '',
    posts: [],
    error: '',
  });
  const [theme, setTheme] = useState({
    primaryColor: 'deepskyblue',
    secondaryColor: 'coral',
  });
  const [posts, getPosts] = useResource(() => ({
    url: '/posts',
    method: 'get',
  }));

  const { user, error } = state;
  useEffect(() => {
    document.title = user
      ? `${user} - React Hooks Blog `
      : 'React Hooks Blog';
  }, [user]);
  useEffect(getPosts, []);
  useEffect(() => {
    if (posts && posts.error) {
      dispatch({ type: 'POSTS_ERROR' });
    }
    if (posts && posts.data) {
      dispatch({ type: 'FETCH_POSTS', posts: posts.data.reverse() });
    }
  }, [posts]);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <ThemeContext.Provider value={theme}>
        <div style={{ padding: 8 }}>
          <Header text="React Hooks Blog" />
          <ChangeTheme theme={theme} setTheme={setTheme} />
          <br />
          <UserBar />
          <br />
          {user && <CreatePost />}
          <br />
          <hr />
          {error && <b>{error}</b>}
          <PostList />
        </div>
      </ThemeContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
