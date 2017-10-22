import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

export default class IndecisionApp extends React.Component {
    state = {
        title: 'Indecision App',
        subtitle: 'Put your live in the hands of a computer',
        options: []
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    };

    handleAddOption = (option) => {
        if(this.state.options.indexOf(option) > -1) {
            return 'Option already exist.'
        } else if(option === '') {
            return 'Please write a valid option.'
        }

        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    };

    handleRemoveAll = () => {
        this.setState(() => ({ options: [] }));
    };

    handleRemoveOption = (optionToRemove) => {
        this.setState((prevState) => ({ options: prevState.options.filter((option) => optionToRemove !== option )}))
    };

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