class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
        
        this.state = {
            title: 'Indecision App',
            subtitle: 'Put your live in the hands of a computer',
            options: []
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            console.log('Error fetching data.');
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('Unmounting component');
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        if(this.state.options.indexOf(option) > -1) {
            return 'Option already exist.'
        } else if(option === '') {
            return 'Please write a valid option.'
        }

        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    }

    handleRemoveAll() {
        this.setState(() => ({ options: [] }));
    }

    handleRemoveOption(optionToRemove) {
        this.setState((prevState) => ({ options: prevState.options.filter((option) => optionToRemove !== option )}))
    }

    render() {
        return (
            <div>
                <Header subtitle={this.state.subtitle} />
                <Action
                    handlePick={this.handlePick}
                    disabled={this.state.options.length === 0}
                />
                <Options
                    options={this.state.options}
                    handleRemoveAll={this.handleRemoveAll}
                    handleRemoveOption={this.handleRemoveOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision App'
};

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={props.disabled}
            >
                What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            {props.options.length > 0 && <button onClick={props.handleRemoveAll}>Remove all</button>}
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handleRemoveOption={props.handleRemoveOption}
                    />
                ))
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => {
                props.handleRemoveOption(props.optionText);
            }}>
                remove
            </button>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.myOption.value.trim();

        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }));
        e.target.elements.myOption.value = '';
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='myOption' />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));