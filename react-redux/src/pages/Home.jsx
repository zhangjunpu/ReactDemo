import React from 'react';

import { connect } from 'react-redux'

import { addNumberAction } from '../store/actionCreater'
// import { connect } from '../utils/connect'

function Home(props) {
    return (
        <div>
            <h2>Home：{props.counter}</h2>
            <button onClick={e => props.increment()}>+1</button>
            <button onClick={e => props.addNumber(5)}>+5</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(addNumberAction(1)),
    addNumber: (num) => dispatch(addNumberAction(num)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);