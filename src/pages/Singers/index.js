import React, {memo, useState, useCallback, useEffect} from 'react'
import { connect } from 'react-redux'
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
        fetchSingerList
    } = props
    useEffect(() => {
        fetchSingerList({
            fetchType: 'hot',
            page
        })
    }, [])
    const handleClick = useCallback((type, value) => {
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
    }, [scrollValue])

    /* 上拉加载*/
    const pullUp = useCallback(() => {
        console.log('pill up', scrollValue);
    }, [scrollValue])
    /* 下拉加载 */
    const pullDown = useCallback(() => {
        fetchSingerList({
            fetchType: 'normal',
            page,
            ...scrollValue
        })
        console.log('pullDown', scrollValue);
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
// const mapDispatchToProps = actions => {
//     return {actions}
// }

export default compose(
    connect(mapStateToProps, actions),
    memo
)(Singers)
