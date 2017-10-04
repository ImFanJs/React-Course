console.log('app.js is running');

// JSX = Javascript XML

// var template = <p>This is jsx code from app.js</p>;

var template = React.createElement(
    "p",
    null,
    "This is my JSX code from app.js"
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);