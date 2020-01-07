import React, {memo, useState, useCallback, useEffect} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {actions} from "../../store/reducers/singers";
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
        list,
        page,
        fetchSingerList,
        changePage
    } = props
    useEffect(() => {
        fetchSingerList({
            fetchType: 'hot',
            page
        })
    // eslint-disable-next-line
    }, [])
    const handleClick = useCallback((type, value) => {
        changePage(0)
        const newValue = {
            ...scrollValue,
            [type]: value
        }
        handleSetScrollVal(newValue)
        fetchSingerList({
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
        fetchSingerList({
            fetchType,
            isAppend: true,
            page: page + 50,
            ...scrollValue
        })
        changePage(page+50)
    // eslint-disable-next-line
    }, [scrollValue, page])
    /* 下拉加载 */
    const pullDown = useCallback(() => {
        fetchSingerList({
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
                list={list}/>
        </div>
    )
}

const mapStateToProps = state => ({
    list: state.getIn(['singer', 'singerList']),
    page: state.getIn(['singer', 'page'])
})

export default compose(
    connect(mapStateToProps, actions),
    memo
)(Singers)
