import React from 'react';
import { site, posts } from '../data';
import { prettyDate, values, summary } from '../utils';

export default () =>
  <main>{
    values(posts).reverse().map(post =>
      <a href={site.baseurl + post.path} key={post.path}>
        <h2>{post.title}</h2>
        <span>{post.author} </span>
        <time>{prettyDate(post.date)}</time>
        <p dangerouslySetInnerHTML={{ __html: summary(post) }} />
      </a>
    )
  }</main>
