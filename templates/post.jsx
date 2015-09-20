import React from 'react';

export default ({ post }) =>
  <main itemScope itemType='http://schema.org/BlogPosting'>
    <h1 itemProp='headline'>{post.title}</h1>
    <div itemProp='author'>{post.author}</div>
    <time itemProp='datePublished' content={post.date}>
      {new Date(post.date).toDateString()}
    </time>
    <div itemProp='articleBody' dangerouslySetInnerHTML={{ __html: post.__content }} />
  </main>
