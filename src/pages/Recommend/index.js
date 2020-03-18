import React, { memo, useEffect, useCallback } from 'react'
import { renderRoutes } from 'react-router-config';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { actions } from "@store/reducers/recommend";
import Slider from '@components/Slider'
import RecommendList from '@components/RecommendList'

import './index.scss'

const Recommend = props => {
    const {
        history,
        fetch_banner,
        fetch_recommend,
        bannerList,
        recommendList,
        route
    } = props
    const bannerListJS = bannerList ? bannerList.toJS() : [],
        recommendListJs = recommendList ? recommendList.toJS() : []
    useEffect(() => {
        /* 请求banner列表 */
        !bannerList.size && fetch_banner()
        /* 请求推荐列表 */
        !recommendList.size && fetch_recommend()
        // eslint-disable-next-line
    }, [])
    const handleRecommendClick = useCallback(id => {
        !!id && history.push(`/recommend/${id}`)
    }, [])
    return (
        <>
            <div className="recommend-wrapper">
                <Slider sliderList={bannerListJS}/>
                <RecommendList
                    onClick={handleRecommendClick}
                    list={recommendListJs}/>
            </div>
            {renderRoutes(route.routes)}
        </>
    )
}

export default compose(
    memo,
    connect(
        state => ({
            bannerList: state.getIn(['recommend', 'bannerList']),
            recommendList: state.getIn(['recommend', 'recommendList']),
        }),
        actions
    )
)(Recommend)

