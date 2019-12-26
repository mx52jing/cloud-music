import React, {memo, useEffect} from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {actions} from "../../store/reducers/recommend";
import Slider from '@components/Slider'
import RecommendList from '@components/RecommendList'
import Scroll from '@components/Scroll'

import './index.scss'

const Recommend = props => {
    console.log(props);
    const {
        fetch_banner,
        fetch_recommend,
        bannerList,
        recommendList
    } = props
    useEffect(() => {
        fetch_banner()
        fetch_recommend()
    }, [])
    const bannerListJS = bannerList ? bannerList.toJS() : [],
        recommendListJs = recommendList ? recommendList.toJS() : []
    return (
        <div className="recommend-wrapper">
            <Scroll>
                <div>
                    <Slider sliderList={bannerListJS}/>
                    <RecommendList list={recommendListJs}/>
                </div>
            </Scroll>
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

