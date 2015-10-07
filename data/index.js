import site from './site.yml';
site.baseurl = site.baseurl || '';

const toPath = file => file.replace(/\.\/.*?\//, '/').replace(/\..*$/, '');
const reduceFn = (obj, file) => {
  const path = toPath(file);
  return { ...obj, [path]: { ...require(file), path } };
};

const pages = require.context('.', true, /\/pages\//).keys().reduce(reduceFn, {});
const posts = require.context('.', true, /\/posts\//).keys().reduce(reduceFn, {});

export default { pages, posts, site };
