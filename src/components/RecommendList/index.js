import React, { memo } from 'react'
import LazyLoad, { forceCheck } from 'react-lazyload'
import { getCount } from '@api/utils'
import Scroll from '@BaseUI/Scroll'
import musicImage from '@assets/images/music.png'

import './index.scss'

const RecommendList = props => {
    const { list, onClick } = props
    return (
        <div className="recommend-list-wrapper">
            <h1 className="recommend-list-title">推荐歌单</h1>
            <div className="recommend-list-scroll">
                <Scroll onScroll={forceCheck}>
                    <div>
                        <div className="recommend-list-container">
                            {
                                !!list.length ?
                                    list.map(item => (
                                        <div
                                            onClick={() => onClick(item.id)}
                                            key={item.id}
                                            className="recommend-list-item">
                                            <div className="img-wrapper">
                                                <div className="decorate"></div>
                                                <LazyLoad
                                                    placeholder={
                                                        <img src={musicImage} alt="music"/>
                                                    }>
                                                    <img
                                                        src={`${item.picUrl}?param=300x300`}
                                                        alt="music"/>
                                                </LazyLoad>
                                                <div className="play-count">
                                                    <i className="icon iconfont icon-headset"></i>
                                                    <span className="count">{getCount(item.playCount)}</span>
                                                </div>
                                            </div>
                                            <div className="desc">{item.name}</div>
                                        </div>
                                    )) : null
                            }
                        </div>
                    </div>
                </Scroll>
            </div>
        </div>
    )
}

export default memo(RecommendList)
