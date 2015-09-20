export default require.context('./', false, /^.*\.md$/).keys().reduce((posts, file) => {
  const post = require(file);
  post.path = file.replace(/^\./, '').replace(/\..*$/, '');
  return { ...posts, [post.path]: post };
}, {});
