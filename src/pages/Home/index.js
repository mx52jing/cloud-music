import React, {memo} from 'react'
import { renderRoutes } from "react-router-config"
import {NavLink} from 'react-router-dom'

import './index.scss'

const Home = props => {
    const {route} = props
    return (
        <div className="home-wrap">
            <div className="home-header">
                <span>
                    <i className="icon iconfont icon-caidan"></i>
                </span>
                <span>Web App</span>
                <span>
                    <i className="icon iconfont icon-41"></i>
                </span>
            </div>
            <div className="home-tab">
                <NavLink to='/recommend' activeClassName="nav-active">推荐</NavLink>
                <NavLink to='/singers' activeClassName="nav-active">歌手</NavLink>
                <NavLink to='/rank' activeClassName="nav-active">排行榜</NavLink>
            </div>
            {renderRoutes(route.routes)}
        </div>
    )
}

export default memo(Home)
