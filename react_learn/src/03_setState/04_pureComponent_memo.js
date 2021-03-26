import React, { Component, memo, PureComponent } from 'react'

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    render() {
        console.log("App render");
        return (
            <div>
                <HeaderCpn />
                <MainCpn />
                <FooterCpn />
                <h4>当前计数：{this.state.counter}</h4>
                <button onClick={() => this.increment()}>+1</button>
            </div>
        )
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        });
    }
}

const HeaderCpn = memo(function (props) {
    console.log("HeaderCpn render");
    return (
        <div>
            <h2>我是Header</h2>
        </div>
    );
})

const FooterCpn = memo(function (props) {
    console.log("FooterCpn render");
    return (
        <div>
            <h2>我是Footer</h2>
        </div>
    );
})

class MainCpn extends PureComponent {
    render() {
        console.log("MainCpn render");
        return (
            <div>
                <SlideCpn />
                <ListCpn />
            </div>
        )
    }
}

const SlideCpn = memo(
    function () {
        console.log("SlideCpn render");
        return (
            <div>
                <h3>轮播图</h3>
            </div>
        )
    }
)

class ListCpn extends PureComponent {
    render() {
        console.log("ListCpn render");
        return (
            <div>
                <ul>
                    <li>肖申克的救赎</li>
                    <li>大话西游</li>
                    <li>盗梦空间</li>
                    <li>星际穿越</li>
                </ul>
            </div>
        )
    }
}


