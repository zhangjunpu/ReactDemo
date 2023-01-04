import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import { addNumberAction } from '../store/counter'
import { requestRecommendAction } from '../store/recommend'

// import { connect } from '../utils/connect'

class Home extends PureComponent {
    componentDidMount() {
        this.props.requestRecommend();
    }

    render() {
        return (
            <div>
                <h2>Home：{this.props.counter}</h2>
                <button onClick={e => this.props.increment()}>+1</button>
                <button onClick={e => this.props.addNumber(5)}>+5</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    counter: state.counterInfo.counter,
})

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(addNumberAction(1)),
    addNumber: (num) => dispatch(addNumberAction(num)),
    requestRecommend: () => dispatch(requestRecommendAction),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);