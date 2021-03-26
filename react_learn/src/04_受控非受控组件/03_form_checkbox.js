import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.values = [
            { "name": "苹果", "id": "111" },
            { "name": "香蕉", "id": "222" },
            { "name": "桃子", "id": "333" },
            { "name": "西瓜", "id": "444" },
        ];
        this.state = {
            hobbies: ["111"]
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <fieldset>
                        <legend>兴趣爱好</legend>
                        {
                            this.values.map((item) => {
                                return (
                                    <div>
                                        <label htmlFor={item.id}>
                                            <input
                                                type="checkbox"
                                                id={item.id}
                                                name="hobby"
                                                value={item.id}
                                                checked={this.state.hobbies.includes(item.id)}
                                                onChange={e => this.handleHobbyChange(e)}
                                            />
                                            {item.name}
                                        </label>
                                    </div>
                                );
                            })
                        }
                    </fieldset>
                    <input type="reset" />
                    <input type="submit" />
                </form>
            </div>
        )
    }

    handleHobbyChange(event) {
        const name = event.target.value;
        const checked = event.target.checked;
        const arr = [...this.state.hobbies];
        if (checked && !arr.includes(name)) {
            arr.push(name);
        } else if (!checked && arr.includes(name)) {
            arr.splice(arr.indexOf(name), 1);
        }
        this.setState({
            hobbies: arr
        });
    }

    handleSubmit(event) {
        console.log(this.state.hobbies);
        event.preventDefault();
    }
}
