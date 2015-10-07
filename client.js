import React from 'react';
import addressbar from 'addressbar';
import { render } from 'react-dom';
import App from './templates/app.jsx';
import { site } from './data';
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

render(<Router />, document);
