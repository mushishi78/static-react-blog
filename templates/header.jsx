import React from 'react';
import site from '../config.yml';

export default () =>
  <header style={styles.header}>
    <h1>Static React Blog</h1>
    <nav>
      <a href={site.baseurl + '/'}>Home</a> <a href={site.baseurl + '/about'}>About</a>
    </nav>
  </header>

const styles = {
  header: {
    textAlign: 'center'
  }
}