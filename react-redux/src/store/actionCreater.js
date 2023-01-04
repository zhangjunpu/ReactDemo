import axios from 'axios'

import {
    ADD_NUMBER,
    SUB_NUMBER,
    RECOMMEND
} from './constants'

export const addNumberAction = (num) => ({
    type: ADD_NUMBER,
    num,
})

export const subNumberAction = (num) => ({
    type: SUB_NUMBER,
    num,
})

export const recommendAction = (recommends) => ({
    type: RECOMMEND,
    recommends,
})

export const requestRecommendAction = (dispatch, state) => {
    const data = [{ id: "1", title: "大话西游" }, { id: "2", title: "盗梦空间" }, { id: "3", title: "星际穿越" }, { id: "4", title: "复仇者联盟" }];
    axios.post("https://httpbin.org/post", data).then(res => {
        const list = JSON.parse(res.data.data);
        dispatch(recommendAction(list));
    });
}