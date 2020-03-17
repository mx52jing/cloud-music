import React, {memo} from 'react'
import classnames from 'classnames'

const RankList = ({list = [], global, title}) => {
    return (
        <div className="rank-list__detail">
            <h1 className="rank-title">{title}</h1>
            <div className={
                classnames('',
                    {
                        'rank-global__list': global,
                        'rank-official__list': !global
                    })
            }>
                {
                    list.map(item => (
                        <div
                            key={item.trackUpdateTime}
                            className="rank-item">
                            <div className="img_wrapper">
                                <img
                                    src={item.coverImgUrl}
                                    alt=""/>
                                <div className="decorate"></div>
                                <span className="update_frequecy">
                                    {item.updateFrequency}
                                </span>
                            </div>
                            {
                                !global ? (
                                    <div className="rank-official__info">
                                        {
                                            item.tracks.map((trackItem, index) => {
                                                const value = `${trackItem.first}-${trackItem.second}`
                                                return (
                                                    <div
                                                        key={value}
                                                        className="track-item">
                                                        <span>{index + 1}.</span>
                                                        <span>{value}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                ) : null
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default memo(RankList)
