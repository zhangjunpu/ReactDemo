import React, { PureComponent } from 'react';

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            valid: ""
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={e => this.submitInfo(e)}>
                    <div>
                        <label htmlFor="username">
                            用户名：
                        <input
                                type="text"
                                id="username"
                                name="username"
                                value={this.state.username}
                                onChange={e => this.handleChange(e)} />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="password">
                            密码：
                        <input
                                type="password"
                                id="password"
                                name="password"
                                value={this.state.password}
                                onChange={e => this.handleChange(e)} />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="valid">
                            验证密码：
                        <input
                                type="password"
                                id="valid"
                                name="valid"
                                value={this.state.valid}
                                onChange={e => this.handleChange(e)} />
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="提交" />
                    </div>
                </form>
            </div>
        )
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitInfo(event) {
        event.preventDefault();
        const { username, password, valid } = this.state;
        console.log(username, password, valid);
    }
}
