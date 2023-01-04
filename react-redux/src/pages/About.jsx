import React from 'react'

import { connect } from 'react-redux'

import { subNumberAction } from '../store/counter'
// import { connect } from '../utils/connect';

function About(props) {
    return (
        <div>
            <h2>About：{props.counter}</h2>
            <button onClick={e => props.decrement()}>-1</button>
            <button onClick={e => props.subNumber(5)}>-5</button>

            <h2>推荐列表</h2>
            <ul>
                {
                    props.recommends.map((item, index) => (
                        <li key={item.id}>{item.title}</li>
                    ))
                }
            </ul>
            <br />
        </div>
    )
}

const mapStateToProps = (state) => ({
    counter: state.counterInfo.counter,
    recommends: state.recommendInfo.recommends,
})

const mapDispatchToProps = (dispatch) => ({
    decrement: () => dispatch(subNumberAction(1)),
    subNumber: (num) => dispatch(subNumberAction(num)),
})

export default connect(mapStateToProps, mapDispatchToProps)(About);