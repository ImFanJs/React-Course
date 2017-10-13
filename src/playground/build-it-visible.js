class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleVisibility = this.handleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    
    handleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility toggle</h1>
                <button onClick={this.handleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
               {this.state.visibility && <p>Hey, you can see now these details!</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visibility = false;

// const changeVisibility = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility toggle</h1>
//             <button onClick={changeVisibility}>
//                 {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && <p>Hey, you can see now these details!</p>}
//         </div>
//     );
//     ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();