import React, {useEffect, memo} from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {actions} from '@store/reducers/rank'


const Rank = props => {
    console.log(props, 'rank');
    const {
        fetchRankList,
        rankList
    } = props,
        list = !!rankList ? rankList.toJS() : []
    console.log(list);
    /* 请求排行榜列表 */
    useEffect(() => {
        if(!rankList.size) {
            fetchRankList()
        }
    }, [])
    return (
        <div className="rank-wrap">

        </div>
    )
}

export default compose(
    connect(
        state => ({
            rankList: state.getIn(['rank', 'rankList'])
        }),
        actions
    ),
    memo
)(Rank)
