import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * class子组件
 */
class ChildCpn1 extends Component {
    render() {
        const { name, age, height } = this.props;
        return (
            <div>
                <h2>个人信息</h2>
                <div>姓名：{name}</div>
                <div>年龄：{age}</div>
                <div>身高：{height}</div>
            </div>
        );
    }

    // 参数验证
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number,
        height: PropTypes.number,
    }

    // 默认参数
    static defaultProps = {
        name: "JunpuZ",
        age: 18,
        height: 1.78
    }
}

/**
 * function子组件
 */
function ChildCpn2(props) {
    const { hobby } = props;
    return (
        <div>
            <h2>兴趣爱好</h2>
            <ul>
                {
                    hobby.map((item, index) => (<li key={index}>{item}</li>))
                }
            </ul>
        </div>
    );
}

// 参数验证
ChildCpn2.propTypes = {
    hobby: PropTypes.array,
}

// 默认参数
ChildCpn2.defaultProps = {
    hobby: ["抽烟", "喝酒", "烫头"]
}

export default class App extends Component {
    render() {
        return (
            <div>
                {/* <ChildCpn1 name="Junpu" age={18} height={1.78} /> */}
                <ChildCpn1 />
                {/* <ChildCpn2 hobby={["唱", "跳", "rap"]} /> */}
                <ChildCpn2 />
            </div>
        )
    }
}
