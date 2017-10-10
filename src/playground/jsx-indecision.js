// JSX = Javascript XML
const app = {
    title: 'Indecision App',
    subtitle: 'Let your decisions in hands of a computer',
    options: [],
    showError: false,
    errorMsg: 'You need enter a valid option'
}

const onSubmitForm = (e) => {
    e.preventDefault();
    const option = e.target.elements.myOption.value;

    if (option) {
        app.options.push(option);
        e.target.elements.myOption.value = '';
        app.showError = false;
        render();
    } else {
        app.showError = true;
        render();
    }
}

const remove = () => {
    app.options = [];
    render();
};

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length ? 'Here are your options' : 'No options'}</p>
            {app.options.length > 0 && <button onClick={makeDecision}>What should i do?</button>}
            {app.options.length > 0 && <button onClick={remove}>Remove all</button>}
            <ol>
                {app.options.map((option) => <li key={option}>{option}</li>)}
            </ol>
            {app.showError && <p>{app.errorMsg}</p>}
            <form onSubmit={onSubmitForm}>
                <input type='text' name='myOption' />
                <button type='submit'>Add</button>
            </form>
        </div>
    );

    const appRoot = document.getElementById('app');
    
    ReactDOM.render(template, appRoot);
}

render();
