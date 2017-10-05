console.log('app.js is running');

// JSX = Javascript XML

var app = {
    title: 'Indescision App',
    subtitle: 'More info',
    options: ['One', 'Two']
}

var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options ? 'Here are your options' : 'No options'}</p>
    </div>
);

var user = {
    name: 'Jesus Castaneda',
    age: 30,
    location: 'Monterrey'
}
function getLocation(loc) {
    if(loc) {
        return <p>Location: {user.location}</p>;
    }
}
var templateTwo = (
    <div>
        <h1>{user.name || 'Anonymous'}</h1>
        {user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);