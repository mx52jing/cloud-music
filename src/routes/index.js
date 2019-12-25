import React from 'react'
import { Redirect } from 'react-router-dom'
import Loadable from '../components/Loadable'

const Home = Loadable(() => import('@pages/Home'))
const Recommend = Loadable(() => import('@pages/Recommend'))
const Rank = Loadable(() => import('@pages/Rank'))
const Singers = Loadable(() => import('@pages/Singers'))

export default [{
    component: Home,
    routes: [
        {
            path: '/',
            exact: true,
            render: _ => (
                <Redirect to='/recommend'/>
            )
        },
        {
            path: '/recommend',
            component: Recommend
        },
        {
            path: '/rank',
            component: Rank
        },
        {
            path: '/singers',
            component: Singers
        }
    ]
}]
