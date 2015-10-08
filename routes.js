import { pages, posts } from './data';

export default [
  '/',
  ...Object.keys(pages),
  ...Object.keys(posts)
];
