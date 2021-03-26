import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.value = ["男", "女", "保密"];
        this.state = {
            sex: ""
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <h2>性别：</h2>
                    {
                        this.value.map(((item, index) => {
                            return (
                                <div>
                                    <label htmlFor={index}>
                                        <input
                                            type="radio"
                                            id={index}
                                            name="sex"
                                            value={item}
                                            checked={this.state.sex === item}
                                            onChange={e => this.handleChange(e)}
                                        />
                                        {item}
                                    </label>
                                </div>
                            );
                        }))
                    }
                    <input type="submit" />
                </form>
            </div>
        )
    }

    handleChange(event) {
        this.setState({
            sex: event.target.value
        });
    }

    handleSubmit(event) {
        console.log(this.state.sex);
        event.preventDefault();
    }
}
