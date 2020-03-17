import React, {memo} from 'react'

import './index.scss'

const Loading = () => {
    return (
        <div className="loading-wrapper">
            <div className="loading-animation"></div>
            <div className="loading-animation"></div>
        </div>
    )
}

export default memo(Loading)
