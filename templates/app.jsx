import React from 'react';
import { pages, posts } from '../data';
import Layout from './layout.jsx';
import Home from './home.jsx';
import Page from './page.jsx';
import Post from './post.jsx';

export default ({ path }) =>
  <Layout path={path}>{
    path === '/' ? <Home /> :
    pages[path]  ? <Page page={pages[path]} /> :
    posts[path]  ? <Post post={posts[path]} /> : null
  }</Layout>
