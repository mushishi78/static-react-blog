import React from 'react';
import { renderToString } from 'react-dom/server';
import routes from './routes';
import App from './templates/app.jsx';
import feed from './templates/feed';
import './css';

function toFilename(path) {
  if(path.indexOf('.') < 0) { path += '/index.html'; }
  return path.replace(/^(\\|\/)+/, '');
}

function renderPath(path) {
	return '<!doctype html>' + renderToString(<App path={path} />);
}

export default function(render, done) {
  render('feed.xml', feed);
  routes.forEach(route => render(toFilename(route), renderPath(route)));
  done();
}
