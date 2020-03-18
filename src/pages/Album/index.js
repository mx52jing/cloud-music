import React, { memo, useEffect, useCallback, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Header from '@components/Header'

import './index.scss'

const Album = props => {
    const { history } = props
    const [isShow, handleShow] = useState(true)
    console.log(props);
    const handleBack = useCallback(() => {
        handleShow (false);
    }, [])
    //mock 数据
    const currentAlbum = {
        creator: {
            avatarUrl: "http://p1.music.126.net/O9zV6jeawR43pfiK2JaVSw==/109951164232128905.jpg",
            nickname: "浪里推舟"
        },
        coverImgUrl: "http://p2.music.126.net/ecpXnH13-0QWpWQmqlR0gw==/109951164354856816.jpg",
        subscribedCount: 2010711,
        name: "听完就睡，耳机是天黑以后柔软的梦境",
        tracks:[
            {
                name: "我真的受伤了",
                ar: [{name: "张学友"}, {name: "周华健"}],
                al: {
                    name: "学友 热"
                }
            },
            {
                name: "我真的受伤了",
                ar: [{name: "张学友"}, {name: "周华健"}],
                al: {
                    name: "学友 热"
                }
            },
            {
                name: "我真的受伤了",
                ar: [{name: "张学友"}, {name: "周华健"}],
                al: {
                    name: "学友 热"
                }
            },
            {
                name: "我真的受伤了",
                ar: [{name: "张学友"}, {name: "周华健"}],
                al: {
                    name: "学友 热"
                }
            },
            {
                name: "我真的受伤了",
                ar: [{name: "张学友"}, {name: "周华健"}],
                al: {
                    name: "学友 热"
                }
            },
            {
                name: "我真的受伤了",
                ar: [{name: "张学友"}, {name: "周华健"}],
                al: {
                    name: "学友 热"
                }
            },
            {
                name: "我真的受伤了",
                ar: [{name: "张学友"}, {name: "周华健"}],
                al: {
                    name: "学友 热"
                }
            },
            {
                name: "我真的受伤了",
                ar: [{name: "张学友"}, {name: "周华健"}],
                al: {
                    name: "学友 热"
                }
            },
            {
                name: "我真的受伤了",
                ar: [{name: "张学友"}, {name: "周华健"}],
                al: {
                    name: "学友 热"
                }
            },
            {
                name: "我真的受伤了",
                ar: [{name: "张学友"}, {name: "周华健"}],
                al: {
                    name: "学友 热"
                }
            },
        ]
    }
    return (
        <CSSTransition
            classNames="fly"
            in={isShow}
            timeout={366}
            appear={true}
            unmountOnExit
            onExited={history.goBack}>
            <div className="album-wrapper">
                <Header
                    handleClick={handleBack}
                    title="返回"/>
            </div>
        </CSSTransition>
    )
}

export default memo(Album)

