class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        
        this.state = {
            title: 'Indecision App',
            subtitle: 'Put your live in the hands of a computer',
            options: []
        }
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

        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            }
        });
    }

    handleRemoveAll() {
        this.setState(() => {
            return {
                options: []
            }
        });
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} subtitle={this.state.subtitle} />
                <Action
                    handlePick={this.handlePick}
                    disabled={this.state.options.length === 0}
                />
                <Options
                    options={this.state.options}
                    handleRemoveAll={this.handleRemoveAll}
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
            <h2>{props.subtitle}</h2>
        </div>
    );
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
            {
                props.options.map((option) => <Option key={option} optionText={option} />)
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>{props.optionText}</div>
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
        this.setState(() => {
            return {
                error
            }

        });
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