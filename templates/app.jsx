import React from 'react';
import { pages, posts } from '../data';
import Home from './home.jsx';
import Layout from './layout.jsx';
import Page from './page.jsx';
import Post from './post.jsx';

export default ({ path }) =>
  <Layout path={path}>{
    path === '/' ? <Home /> :
    pages[path]  ? <Page page={pages[path]} /> :
    posts[path]  ? <Post post={posts[path]} /> :
                   <Page page={pages['/404']} />
  }</Layout>
