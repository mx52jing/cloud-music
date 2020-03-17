import React, {useEffect, memo} from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import Scroll from '@BaseUI/Scroll'
import {actions} from '@store/reducers/rank'
import {filterIndex} from '@api/utils'
import RankList from './RankList'

import './index.scss'

const Rank = props => {
    const {
            fetchRankList,
            rankList
        } = props,
        list = !!rankList ? rankList.toJS() : [],
        globalStartIndex = filterIndex(list),
        /* 官方榜 */
        officialList = list.slice(0, globalStartIndex),
        /* 全球榜 */
        globalList = list.slice(globalStartIndex);
    /* 请求排行榜列表 */
    useEffect(() => {
        if (!rankList.size) {
            fetchRankList()
        }
    }, [])
    return (
        <div className="rank-wrapper">
            <Scroll>
                <div>
                    <RankList
                        title="官方榜"
                        list={officialList}/>
                    <RankList
                        global
                        list={globalList}
                        title="全球榜"/>
                </div>
            </Scroll>
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
