import React from 'react';
import posts from '../posts';
import About from './about.jsx';
import Home from './home.jsx';
import Layout from './layout.jsx';
import NotFound from './404.jsx';
import Post from './post.jsx';

export default ({ path }) =>
  <Layout path={path}>{
    path === '/'      ? <Home /> :
    path === '/about' ? <About /> :
    posts[path]       ? <Post post={posts[path]} /> :
                        <NotFound path={path} />
  }</Layout>
