'use strict';

console.log('app.js is running');

// JSX = Javascript XML

var template = React.createElement(
  'h1',
  null,
  'This is my jsx code from app.js'
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);