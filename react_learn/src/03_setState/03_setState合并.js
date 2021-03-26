import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    render() {
        const { message, counter } = this.state;
        return (
            <div>
                <h2>{counter}</h2>
                <button onClick={() => this.increment()}>+1</button>
                <button onClick={() => this.increment1()}>+1</button>
            </div>
        )
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        });
        this.setState({
            counter: this.state.counter + 1
        });
        this.setState({
            counter: this.state.counter + 1
        });
    }

    increment1() {
        this.setState((state, props) => ({ counter: state.counter + 1 }));
        this.setState((state, props) => ({ counter: state.counter + 1 }));
        this.setState((state, props) => ({ counter: state.counter + 1 }));
    }
}
