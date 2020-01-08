import React, {memo} from 'react'
import LazyLoad, {forceCheck} from 'react-lazyload';
import Scroll from '@BaseUI/Scroll'
import singerImg from '@assets/images/singer.png'

const SingerList = props => {
    const {singerData,pullUp,pullDown} = props,
        {artists = [], more } = singerData.toJS()
    return (
        <div className="singer-list-wrapper">
            <Scroll
                pullUp={pullUp}
                pullDown={pullDown}
                onScroll={forceCheck}>
                <div>
                    <div className="singer-list__scroll">
                        {
                            !!artists.length &&
                            artists.map(item => (
                                    <div
                                        key={item.id}
                                        className="singer-list-item">
                                        <LazyLoad
                                            placeholder={
                                                <img width="100%" height="100%" src={singerImg} alt="music"/>
                                            }>
                                            <img src={`${item.picUrl}?param=300x300`} alt=""/>
                                        </LazyLoad>
                                        <span>{item.name}</span>
                                    </div>
                                ))
                        }
                    </div>
                    {
                        !more && (
                            <div className="not-more">
                                <span>
                                    我是有底线的
                                </span>
                            </div>
                        )
                    }
                </div>
            </Scroll>
        </div>
    )
}

export default memo(SingerList)
