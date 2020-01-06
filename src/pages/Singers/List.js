import React, {memo} from 'react'
import LazyLoad, {forceCheck} from 'react-lazyload';
import Scroll from '@BaseUI/Scroll'
import singerImg from '@assets/images/singer.png'

const SingerList = props => {
    const {list: singerList} = props
    return (
        <div className="singer-list-wrapper">
            <Scroll onScroll={forceCheck}>
                <div>
                    <div className="singer-list__scroll">
                        {
                            !!singerList.length &&
                                singerList.map(item => (
                                    <div
                                        key={item.id}
                                        className="singer-list-item">
                                        <LazyLoad placeholder={<img width="100%" height="100%" src={singerImg} alt="music"/>}>
                                            <img src={`${item.picUrl}?param=300x300`} alt=""/>
                                        </LazyLoad>
                                        <span>{item.name}</span>
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </Scroll>
        </div>
    )
}

export default memo(SingerList)
