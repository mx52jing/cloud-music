import React, {memo} from 'react'
import Scroll from '@BaseUI/Scroll'

const singerList = [1, 2,3, 4,5,6,7,8,9,10,11,12].map (item => {
    return {
        picUrl: "https://p2.music.126.net/uTwOm8AEFFX_BYHvfvFcmQ==/109951164232057952.jpg",
        name: "隔壁老樊",
        accountId: 277313426,
        id: Date.now() * item
    }
});

const SingerList = props => {
    return (
        <div className="singer-list-wrapper">
            <Scroll>
                <div>
                    <div className="singer-list__scroll">
                        {
                            !!singerList.length &&
                                singerList.map(item => (
                                    <div
                                        key={item.id}
                                        className="singer-list-item">
                                        <img src={item.picUrl} alt=""/>
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
