import React, {memo, useEffect} from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {actions} from "../../store/reducers/recommend";
import Slider from '@components/Slider'
import RecommendList from '@components/RecommendList'

import './index.scss'

const Recommend = props => {
    const {
        fetch_banner,
        fetch_recommend,
        bannerList,
        recommendList
    } = props
    useEffect(() => {
        /* 请求banner列表 */
        !bannerList.size && fetch_banner()
        /* 请求推荐列表 */
        !recommendList.size && fetch_recommend()
    // eslint-disable-next-line
    }, [])
    const bannerListJS = bannerList ? bannerList.toJS() : [],
        recommendListJs = recommendList ? recommendList.toJS() : []
    return (
        <div className="recommend-wrapper">
            <Slider sliderList={bannerListJS}/>
            <RecommendList list={recommendListJs}/>
        </div>
    )
}

export default compose(
    connect(
        state => ({
            bannerList: state.getIn(['recommend', 'bannerList']),
            recommendList: state.getIn(['recommend', 'recommendList']),
        }),
        actions
    ),
    memo
)(Recommend)

