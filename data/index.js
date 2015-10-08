import site from './site.yml';
site.baseurl = site.baseurl || '';

const toPath = file => file.replace(/\.\/.*?\//, '/').replace(/\..*$/, '');

function reduceFn(obj, file) {
  file = { path: toPath(file), ...require(file) };
  return { ...obj, [file.path]: file };
};

const pages = require.context('.', true, /\/pages\//).keys().reduce(reduceFn, {});
const posts = require.context('.', true, /\/posts\//).keys().reduce(reduceFn, {});

export default { pages, posts, site };
