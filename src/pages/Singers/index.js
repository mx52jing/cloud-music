import React, {memo, useState, useCallback, useEffect} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {actions} from "@store/reducers/singers";
import HorizenScroll from '@BaseUI/HorizenScroll'
import SingerList from './List'
import {categoryTypes, alphaTypes} from '@api/config';

import './index.scss'

const Singers = props => {
    const [scrollValue, handleSetScrollVal] = useState({
        category: '',
        initials: ''
    })
    const {
        singerData,
        page,
        fetchSingerData,
        changePage
    } = props,
        more = singerData.get('more')
    useEffect(() => {
        fetchSingerData({
            fetchType: 'hot',
            page
        })
        return () => {
            changePage(0)
        }
    // eslint-disable-next-line
    }, [])
    const handleClick = useCallback((type, value) => {
        changePage(0)
        const newValue = {
            ...scrollValue,
            [type]: value
        }
        handleSetScrollVal(newValue)
        fetchSingerData({
            fetchType: 'normal',
            page,
            ...newValue
        })
    // eslint-disable-next-line
    }, [scrollValue])

    /* 上拉加载*/
    const pullUp = useCallback(() => {
        const {category, initials} = scrollValue,
            fetchType = (!!category || !!initials) ? 'normal' : 'hot'
        more && fetchSingerData({
            fetchType,
            isAppend: true,
            page: page + 50,
            ...scrollValue
        })
        changePage(page+50)
    // eslint-disable-next-line
    }, [scrollValue, page, more])
    /* 下拉加载 */
    const pullDown = useCallback(() => {
        fetchSingerData({
            fetchType: 'normal',
            page,
            ...scrollValue
        })
    // eslint-disable-next-line
    }, [scrollValue])
    return (
        <div className="singers-wrapper">
            <div className="singers-horizen__scroll">
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
            <SingerList
                pullUp={pullUp}
                pullDown={pullDown}
                singerData={singerData}/>
        </div>
    )
}

const mapStateToProps = state => ({
    singerData: state.getIn(['singer', 'singerData']),
    page: state.getIn(['singer', 'page'])
})

export default compose(
    memo,
    connect(mapStateToProps, actions),
)(Singers)
