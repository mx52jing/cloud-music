import React, {memo} from 'react'
import {getCount} from '@api/utils'

import './index.scss'

const RecommendList = props => {
    const {list} = props
    return (
        <div className="recommend-list-wrapper">
            <h1 className="recommend-list-title">推荐歌单</h1>
            <div className="recommend-list-container">
                {
                    list.map(item => (
                        <div
                            key={item.id}
                            className="recommend-list-item">
                            <div className="img-wrapper">
                                <div className="decorate"></div>
                                <img
                                    src={`${item.picUrl}?param=300x300`}
                                    alt=""/>
                                <div className="play-count">
                                    <i className="icon iconfont icon-headset"></i>
                                    <span className="count">{getCount(item.playCount)}</span>
                                </div>
                            </div>
                            <div className="desc">{item.name}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default memo(RecommendList)
