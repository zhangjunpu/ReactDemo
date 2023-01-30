import React, { memo } from 'react';
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { requestRecommendAction } from '../store/recommend';

const Recommend = memo(() => {
    const { recommends } = useSelector(state => ({
        recommends: state.recommendInfo.recommends,
    }), shallowEqual)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestRecommendAction());
    }, [dispatch])

    return (
        <div>
            <h2>Recommend</h2>
            <ul>
                {
                    recommends.map((item, index) => (
                        <li key={item.id}>{item.title}</li>
                    ))
                }
            </ul>
        </div>
    )
})

export default Recommend;