// JSX = Javascript XML
const app = {
    title: 'Indecision App',
    subtitle: 'Let your decisions in hands of a computer',
    options: []
}

const onSubmitForm = (e) => {
    e.preventDefault();
    const option = e.target.elements.myOption.value;

    if (option) {
        app.options.push(option);
        e.target.elements.myOption.value = '';
        render();
    }
}

const remove = () => {
    app.options = [];
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length ? 'Here are your options' : 'No options'}</p>
            <button onClick={remove}>Remove all</button>
            <ol>
                {app.options.map((option) => <li key={option}>{option}</li>)}
            </ol>
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

