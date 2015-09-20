import React from 'react';

export default () =>
  <header style={styles.header}>
    <h1>Static React Blog</h1>
    <nav>
    	<a href='/'>Home</a> <a href='/about'>About</a>
    </nav>
  </header>

const styles = {
	header: {
		textAlign: 'center'
	}
}