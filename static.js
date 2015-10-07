import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './templates/app.jsx';
import feed from './templates/feed';
import './css';

export default function(path, props, callback) {
  callback(path === '/feed' ? feed : '<!doctype html>' + renderToString(<App path={path} />));
}
