import React from 'react';
import posts from '../posts';
import site from '../config.yml';

const postsValues = Object.keys(posts).map(path => posts[path]);

export default () =>
  <main>
    {
      postsValues.map(post =>
        <a href={site.baseurl + post.path} key={post.path} style={styles.a}>
          <h2>{post.title}</h2>
          <span>{post.author}</span> <time>{new Date(post.date).toDateString()}</time>
          <p>{stripHTML(post.__content).substring(0, 300)}...</p>
        </a>
      )
    }
  </main>

function stripHTML(html) {
  return html.replace(/<(?:.|\n)*?>/gm, '');
}

const styles = {
  a: {
    color: '#333'
  }
}
