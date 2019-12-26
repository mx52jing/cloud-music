import React, {forwardRef, memo, useRef, useState, useEffect, useImperativeHandle} from 'react'
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'

import './index.scss'

const Scroll = forwardRef((props, ref) => {
    const [bScroll, handleSetBscroll] = useState()
    const bScrollRef = useRef()
    /* 外组件props */
    const {
        direction,
        click,
        refresh,
        pullUpLoading,
        pullDownLoading,
        bounceTop,
        bounceBottom,
        children,
        pullUp,
        pullDown,
        onScroll
    } = props
    /* 设置scroll 实例 */
    useEffect(() => {
        const bScroll = new BScroll(bScrollRef.current, {
            scrollX: direction === "horizental",
            scrollY: direction === "vertical",
            probeType: 3,
            click: click,
            bounce: {
                top: bounceTop,
                bottom: bounceBottom
            }
        })
        handleSetBscroll(bScroll)
        return _ => {
            handleSetBscroll(null)
        }
    }, [])
    /* 每次重新渲染都要刷新实例，防止无法滑动 */
    useEffect(() => {
        if (refresh && bScroll) {
            bScroll.refresh();
        }
    })
    /* 为实例绑定scroll事件*/
    useEffect(() => {
        if (!bScroll || !onScroll) return
        bScroll.on('scroll', scroll => {
            onScroll(scroll)
        })
        return _ => {
            bScroll.off('scroll')
        }
    }, [bScroll, onScroll])
    /* 设置上拉刷新 */
    useEffect(() => {
        if (!bScroll || !pullUp) return
        bScroll.on('scrollEnd', _ => {
            if (bScroll.y - bScroll.maxScrollY <= 100) {
                pullUp()
            }
        })
        return _ => {
            bScroll.off('scrollEnd')
        }
    }, [bScroll, pullUp])
    /* 判断是否下拉刷新 */
    useEffect(() => {
        if (!bScroll || !pullDown) return;
        bScroll.on('touchEnd', (pos) => {
            // 判断用户的下拉动作
            if (pos.y > 50) {
                pullDown();
            }
        });
        return _ => {
            bScroll.off('touchEnd');
        }
    }, [pullDown, bScroll])
    /* 将组件内的方法暴露出去 */
    useImperativeHandle(ref, _ => ({
        refresh: _ => {
            if (!bScroll) return
            bScroll.refresh()
            bScroll.scrollTo(0, 0)
        },
        getBsInstance: _ => {
            if(bScroll) {
                return bScroll
            }
        }
    }))
    return (
        <div
            ref={bScrollRef}
            className="scroll-wrapper">
            {children}
        </div>
    )
})

Scroll.propTypes = {
    /* 滚动方向 */
    direction: PropTypes.oneOf(['vertical, horizental']),
    /* 是否支持点击 */
    click: PropTypes.bool,
    /* 是否刷新 */
    refresh: PropTypes.bool,
    /* 滚动触发的函数 */
    onScroll: PropTypes.func,
    /* 上拉加载 */
    pullUp: PropTypes.func,
    /* 下拉加载 */
    pullDown: PropTypes.func,
    /* 是否显示上拉 loading 动画*/
    pullUpLoading: PropTypes.bool,
    /* 是否显示下拉 loading 动画*/
    pullDownLoading: PropTypes.bool,
    /* 是否支持向上吸顶/滚动超过边缘的时候会有一小段回弹动画，表示是否开启动画*/
    bounceTop: PropTypes.bool,
    /* 是否支持向下吸底 */
    bounceBottom: PropTypes.bool
}

Scroll.defaultProps = {
    direction: 'vertical',
    click: true,
    refresh: true,
    onScroll: null,
    pullUpLoading: false,
    pullDownLoading: false,
    pullUp: null,
    pullDown: null,
    bounceTop: true,
    bounceBottom: true
}
export default memo(Scroll)
