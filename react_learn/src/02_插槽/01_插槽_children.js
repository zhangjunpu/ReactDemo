import React, { Component } from 'react'
import "./style.css"

/**
 * children方式
 */
function NavBar(props) {
    return (
        <div className="navbar">
            <div className="nav-item left">{props.children[0]}</div>
            <div className="nav-item center">{props.children[1]}</div>
            <div className="nav-item right">{props.children[2]}</div>
        </div>
    )
}

export default class App extends Component {
    render() {
        return (
            <div>
                <NavBar >
                    <div>返回</div>
                    <strong>内容</strong>
                    <button>...</button>
                </NavBar>
            </div>
        )
    }
}
