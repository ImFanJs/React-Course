let counter = 0;

const add = () => {
    counter++;
    renderTemplate();
};

const minus = () => {
    counter--;
    renderTemplate();
};

const reset = () => {
    counter = 0;
    renderTemplate();
};

const appRoot = document.getElementById('app');

function renderTemplate() {
    const counterTemplate = (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={add}>Add 1</button>
            <button onClick={minus}>Remove 1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(counterTemplate, appRoot);
}

renderTemplate();