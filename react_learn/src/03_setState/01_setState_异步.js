import React, { Component } from 'react'

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "hello world"
        }
    }

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={() => this.changeText()}>change</button>
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(2, this.state.message);
    }

    changeText() {
        this.setState({
            message: "你好啊，李银河"
        }, () => {
            console.log(3, this.state.message);
        });
        console.log(1, this.state.message);
    }
}

