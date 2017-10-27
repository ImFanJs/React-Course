import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }

    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.myOption.value.trim();

        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }));
        e.target.elements.myOption.value = '';
    };

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type='text' name='myOption' />
                    <button className="button">Add</button>
                </form>
            </div>
        );
    }
}
