import React, { Component } from 'react'
import "./style.css"


class TabBar extends Component {
    constructor() {
        super();
        this.state = {
            curIndex: 0
        }
    }

    render() {
        const { tabs } = this.props;
        const { curIndex } = this.state;
        return (
            <div className="tabbar">
                {
                    tabs.map((item, index) => {
                        return (
                            <div className={"tab-item"}
                                onClick={e => this.tabItemClick(index)}
                                key={index}>
                                <span className={"text " + (curIndex === index ? "active" : "")}>{item}</span>
                            </div>
                        )
                    })
                }
            </div >
        )
    }

    tabItemClick(index) {
        this.setState({
            curIndex: index
        });
        this.props.itemClick(index)
    }
}

export default class App extends Component {
    constructor() {
        super();
        this.tabs = ["热门", "最新", "流行"];
        this.state = {
            curTab: this.tabs[0]
        }
    }

    render() {
        return (
            <div>
                <TabBar tabs={this.tabs} itemClick={(index) => this.tabItemClick(index)} />
                <h3>{this.state.curTab}</h3>
            </div>
        )
    }

    tabItemClick(index) {
        this.setState({
            curTab: this.tabs[index]
        });
    }
}
