import React from 'react';
import { prettyDate } from '../utils';

export default ({ post }) =>
  <main itemScope itemType='http://schema.org/BlogPosting'>
    <article>
      <h1 itemProp='headline'>{post.title}</h1>
      <div itemProp='author'>{post.author}</div>
      <time itemProp='datePublished' content={post.date}>{prettyDate(post.date)}</time>
      <div itemProp='articleBody' dangerouslySetInnerHTML={{ __html: post.__content }} />
    </article>
  </main>
