'use strict';

var visibility = false;

var changeVisibility = function changeVisibility() {
    visibility = !visibility;
    render();
};

var render = function render() {
    var jsx = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility toggle'
        ),
        React.createElement(
            'button',
            { onClick: changeVisibility },
            visibility ? 'Hide details' : 'Show details'
        ),
        visibility && React.createElement(
            'p',
            null,
            'Hey, you can see now these details!'
        )
    );
    ReactDOM.render(jsx, document.getElementById('app'));
};

render();
