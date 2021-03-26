import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "hello world",
        }
    }

    render() {
        const { message, counter } = this.state;
        return (
            <div>
                <h2>{message}</h2>
                <button onClick={() => this.changeText()}>changeText</button>
                <button id="btn">changeText（DOM）</button>
            </div>
        )
    }

    componentDidMount() {
        // 原生dom下setState是同步的
        const btn = document.getElementById('btn');
        btn.addEventListener('click', () => {
            this.setState({
                message: "你好啊，李银河1"
            });
            console.log(this.state.message);
        });
    }

    changeText() {
        // 定时器下setState是同步的
        setTimeout(() => {
            this.setState({
                message: "你好啊，李银河2"
            });
            console.log(this.state.message);
        }, 0);
    }
}
