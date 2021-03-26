import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            message: "Hello World"
        }
        this.msgRef = createRef();
        this.funRef = null;
        this.counterRef = createRef();
    }

    render() {
        return (
            <div>
                <h2 ref="msgRef">{this.state.message}</h2>
                <h2 ref={this.msgRef}>{this.state.message}</h2>
                <h2 ref={(element) => { this.funRef = element }}>{this.state.message}</h2>
                <button onClick={e => this.changeText(e)}>ChangeText</button>

                <hr />
                <Counter ref={this.counterRef} />
                <button onClick={e => this.increment()}>+1</button>
            </div>
        )
    }

    changeText(event) {
        // 1. 通过字符串获取
        this.refs.msgRef.innerHTML = "Hello String"
        // 2. 通过对象获取
        this.msgRef.current.innerHTML = "Hello Object"
        // 3. 通过方法
        this.funRef.innerHTML = "Hello Function"
    }

    increment() {
        this.counterRef.current.increment();
    }
}


class Counter extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    render() {
        return (
            <div>
                <h2>当前计数：{this.state.counter}</h2>
            </div>
        )
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        });
    }
}
