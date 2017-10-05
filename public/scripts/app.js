'use strict';

console.log('app.js is running');

// JSX = Javascript XML

var app = {
    title: 'Indescision App',
    subtitle: 'More info',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options ? 'Here are your options' : 'No options'
    )
);

var user = {
    name: 'Jesus Castaneda',
    age: 30,
    location: 'Monterrey'
};
function getLocation(loc) {
    if (loc) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            user.location
        );
    }
}
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name || 'Anonymous'
    ),
    user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
