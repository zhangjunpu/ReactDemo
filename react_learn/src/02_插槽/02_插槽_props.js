import React, { Component } from 'react'
import "./style.css"

/**
 * props方式精准插槽
 */
class NavBar extends Component {
    render() {
        const { itemLeft, itemCenter, itemRight } = this.props
        return (
            <div className="navbar">
                <div className="nav-item left">{itemLeft}</div>
                <div className="nav-item center">{itemCenter}</div>
                <div className="nav-item right">{itemRight}</div>
            </div>
        )
    }
}

export default class App extends Component {
    render() {
        const itemLeft = <div>返回</div>;
        const itemCenter = <strong>标题</strong>;
        const itemRight = <a href="/#">...</a>;
        return (
            <NavBar itemLeft={itemLeft} itemCenter={itemCenter} itemRight={itemRight} />
        )
    }
}
