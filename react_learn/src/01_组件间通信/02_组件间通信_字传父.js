import React, { Component } from 'react'

/**
 * class组件
 */
class CounterButton1 extends Component {
    render() {
        const { operator, btnClick } = this.props
        return (
            <button onClick={btnClick}>{operator}</button>
        );
    }
}

/**
 * function组件
 */
function CounterButton2(props) {
    const { operator, btnClick } = props;
    return (
        <button onClick={btnClick}>{operator}</button>
    );
}

/**
 * 父组件
 */
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            counter: 100
        };
    }

    render() {
        return (
            <div>
                <div>当前计数: {this.state.counter}</div>
                <CounterButton1 operator="-" btnClick={(e) => this.changeCounter(-1)} />
                <CounterButton2 operator="+" btnClick={(e) => this.changeCounter(1)} />
            </div>
        );
    }

    changeCounter(count) {
        this.setState({
            counter: this.state.counter + count
        })
    }
}
