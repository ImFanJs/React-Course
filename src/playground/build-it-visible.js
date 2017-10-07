let visibility = false;

const changeVisibility = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility toggle</h1>
            <button onClick={changeVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && <p>Hey, you can see now these details!</p>}
        </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
};

render();