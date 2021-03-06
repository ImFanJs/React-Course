const user = {
    name: 'Jesus Castaneda',
    age: 30,
    location: 'Monterrey',
    cities: ['Chihuahua', 'Jimenez', 'Monterrey'],
    printPlacesLived() {
        this.cities.forEach((city) => console.log(this.name + ' has lived in ' + city));
        // return this.cities.map((city) => this.name + ' has lived in ' + city );
    }
}

const multiplier = {
    numbers: [2, 4, 6, 8],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy );
    }
}

user.printPlacesLived();
console.log(multiplier.multiply());

// Arrow functions
const getLocation = (loc) => {
    if(loc) {
        return <p>Location: {user.location}</p>;
    }
};

const templateTwo = (
    <div>
        <h1>{user.name || 'Anonymous'}</h1>
        {user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);