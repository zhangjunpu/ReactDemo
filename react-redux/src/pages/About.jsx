import React from 'react'

import { connect } from 'react-redux'

import { subNumberAction } from '../store/actionCreater'
// import { connect } from '../utils/connect';

function About(props) {
    return (
        <div>
            <h2>About：{props.counter}</h2>
            <button onClick={e => props.decrement()}>-1</button>
            <button onClick={e => props.subNumber(5)}>-5</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
    decrement: () => dispatch(subNumberAction(1)),
    subNumber: (num) => dispatch(subNumberAction(num)),
})

export default connect(mapStateToProps, mapDispatchToProps)(About);