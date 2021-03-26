import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.list = ["小学", "初中", "高中"];
        this.state = {
            edu: "33"
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <div>
                        <span>学历：</span>
                        <select name="edu" value={this.state.edu} onChange={e => this.handleChange(e)}>
                            <option value="11">小学</option>
                            <option value="22">初中</option>
                            <option value="33">高中</option>
                            <option value="44">大学</option>
                        </select>
                    </div>
                    <input type="submit"/>
                </form>
            </div>
        )
    }

    handleChange(event) {
        this.setState({
            edu: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.edu);
    }
}
