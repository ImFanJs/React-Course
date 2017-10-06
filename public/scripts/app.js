'use strict';

// JSX = Javascript XML
var app = {
    title: 'Indecision App',
    subtitle: 'Let your decisions in hands of a computer',
    options: []
};

var onSubmitForm = function onSubmitForm(e) {
    e.preventDefault();
    var option = e.target.elements.myOption.value;

    if (option) {
        app.options.push(option);
        e.target.elements.myOption.value = '';
        render();
    }
};

var remove = function remove() {
    app.options = [];
    render();
};

var render = function render() {
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
            app.options.length ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'button',
            { onClick: remove },
            'Remove all'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onSubmitForm },
            React.createElement('input', { type: 'text', name: 'myOption' }),
            React.createElement(
                'button',
                { type: 'submit' },
                'Add'
            )
        )
    );

    var appRoot = document.getElementById('app');

    ReactDOM.render(template, appRoot);
};

render();
