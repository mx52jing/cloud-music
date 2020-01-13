import React, {memo} from 'react'

import './index.scss'

const LoadingV2 = props => {
    return (
        <div className="loading-v2-wrapper">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <span> 拼命加载中...</span>
        </div>
    )
}

export default memo(LoadingV2)
