import React from 'react';
import { site } from '../data';

export default () =>
  <header>
    <h1>{site.name}</h1>
    <nav>
      <a href={site.baseurl + '/'}>Home </a>
      <a href={site.baseurl + '/about'}>About </a>
      <a href={site.baseurl + '/feed.xml'} target='_blank'>RSS </a>
      <a href={site.github} target='_blank'>GitHub</a>
    </nav>
  </header>