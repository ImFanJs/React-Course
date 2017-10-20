class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        }
    }

    componentDidMount() {
        try {
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount, 10);

            if(!isNaN(count)) {
                this.setState(() => ({ count }));
            }
        } catch (e) {
            console.log('Error fetching data.');
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }
    
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
};

ReactDOM.render(<Counter />, document.getElementById('app'));


// let counter = 0;

// const add = () => {
//     counter++;
//     renderTemplate();
// };

// const minus = () => {
//     counter--;
//     renderTemplate();
// };

// const reset = () => {
//     counter = 0;
//     renderTemplate();
// };

// const appRoot = document.getElementById('app');

// function renderTemplate() {
//     const counterTemplate = (
//         <div>
//             <h1>Counter: {counter}</h1>
//             <button onClick={add}>Add 1</button>
//             <button onClick={minus}>Remove 1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(counterTemplate, appRoot);
// }

// renderTemplate();