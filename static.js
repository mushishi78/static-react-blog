import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './templates/app.jsx';
import './css';

export default function(locals, callback) {
  callback(null, '<!doctype html>' + renderToString(<App path={locals.path} />));
}
