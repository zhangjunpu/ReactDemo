import React, { Component } from 'react'

const UserContext = React.createContext({ name: "JunpuX", age: 18, height: 1.88 });
const ThemeContext = React.createContext({ color: "red" });
const SkillContext = React.createContext(["Android", "Flutter", "React"]);

function ProfileFooter() {
    return (
        <div>
            <ul>
                <ThemeContext.Consumer>
                    {theme => {
                        return (
                            <SkillContext.Consumer>
                                {value => value.map(item => <li style={theme} key={item}>{item}</li>)}
                            </SkillContext.Consumer>
                        )
                    }}
                </ThemeContext.Consumer>
            </ul>
        </div>
    )
}

class ProfileHeader extends Component {
    render() {
        return (
            <div>
                <div>姓名：{this.context.name}</div>
                <div>年龄：{this.context.age}</div>
                <div>身高：{this.context.height}</div>
            </div>
        )
    }

    static contextType = UserContext;
}

class Profile extends Component {
    render() {
        return (
            <div>
                <ProfileHeader />
                <ProfileFooter />
            </div>
        )
    }
}


export default class App extends Component {
    render() {
        const user = { name: "Junpu", age: 31, height: 1.78 };
        const skill = ["唱", "跳", "rap"];
        const theme = { color: "blue" };
        return (
            <div>
                <UserContext.Provider value={user}>
                    <ThemeContext.Provider value={theme}>
                        <SkillContext.Provider value={skill}>
                            <Profile />
                        </SkillContext.Provider>
                    </ThemeContext.Provider>
                </UserContext.Provider>
                {/* 不被UserContext.Provider包裹会触发UserContext默认值 */}
                <Profile />
            </div >
        )
    }
}
