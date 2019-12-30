import React, {memo, useState, useCallback} from 'react'
import HorizenScroll from '@BaseUI/HorizenScroll'
import {categoryTypes, alphaTypes} from '@api/config';

import './index.scss'

const Singers = props => {
    const [scrollValue, handleSetScrollVal] = useState({
        category: '',
        initials: ''
    })
    const handleClick = useCallback((type, value) => {
        handleSetScrollVal({
            ...scrollValue,
            [type]: value
        })
    }, [])
    return (
        <div className="singers-wrapper">
            <div className="singers-scroll">
                <HorizenScroll
                    valueType="category"
                    handleClick={handleClick}
                    value={scrollValue.category}
                    title="分类 (默认热门):"
                    list={categoryTypes}/>
                <HorizenScroll
                    valueType="initials"
                    handleClick={handleClick}
                    value={scrollValue.initials}
                    title="首字母:"
                    list={alphaTypes}/>
            </div>
        </div>
    )
}

export default memo(Singers)
