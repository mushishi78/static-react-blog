import React from 'react';
import addressbar from 'addressbar';
import { render } from 'react-dom';
import App from './templates/app.jsx';
import { site, pages, posts } from './data';
import { values } from './utils';
import './css';

class Router extends React.Component {
  componentWillMount() {
    this.setPath(location.pathname)

    addressbar.on('change', event => {
      event.preventDefault();
      this.setPath(event.target.value);
    });
  }

  setPath(path) {
    path = normalize(path);
    addressbar.value = site.baseurl + path;
    path = paths.indexOf(path) < 0 ? '/404.html' : path;
    this.setState({ path });
    window.scrollTo(0, 0);
  }

  render() {
    return <App path={this.state.path} />;
  }
}

function normalize(path) {
  path = path.replace(location.origin, '');
  path = path.replace('index.html', '');
  path = path.replace(site.baseurl, '');
  path = decodeURIComponent(path);
  path = path.replace(/\/$/, '') || '/';
  return path;
}

const paths = [
  '/',
  ...values(pages).map(page => page.path),
  ...values(posts).map(post => post.path)
];

render(<Router />, document);
