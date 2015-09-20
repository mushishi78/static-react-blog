import React from 'react';
import addressbar from 'addressbar';
import { render } from 'react-dom';
import App from './templates/app.jsx';
import site from './config.yml';
import './css';

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = { path: normalize(location.pathname) };
  }
  componentWillMount () {
    addressbar.on('change', event => {
      event.preventDefault();
      const path = normalize(event.target.value);
      this.setState({ path });
      addressbar.value = site.baseurl + path;
    });
  }
  render() {
    return <App path={this.state.path} />;
  }
}

function normalize(href) {
  href = href.replace(location.origin, '');
  href = href.replace('index.html', '');
  href = href.replace(site.baseurl, '')
  href = decodeURIComponent(href);
  href = href.replace(/\/$/, '') || '/';
  return href;
}

render(<Router />, document);
