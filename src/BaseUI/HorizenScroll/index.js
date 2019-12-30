import React, {memo, useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Scroll from '@BaseUI/Scroll'

import './index.scss'

const HorizenScroll = props => {
    const {
        valueType,
        list,
        title,
        value,
        handleClick
    } = props
    const scrollRef = useRef(null)
    useEffect(() => {
        const scrollDom = scrollRef.current,
            listWrap = scrollDom.querySelector('.list-wrapper'),
            totalItem = listWrap.querySelectorAll('div'),
            totalWidth = Array.from(totalItem).reduce((a, b) => a + b.offsetWidth, 1)
        scrollDom.style.cssText = `width: ${totalWidth + 16}px`
    }, [])
    return (
        <Scroll direction="horizental">
            <div ref={scrollRef}>
                <div className="list-wrapper">
                    <div className="list-title">{title}</div>
                    {
                        !!list.length &&
                        list.map(item => (
                            <div
                                className={
                                    classnames('list-item', {
                                        'item-active': item.key === value
                                    })
                                }
                                onClick={_ => handleClick(valueType, item.key)}
                                key={item.key}>
                                {item.name}
                            </div>
                        ))
                    }
                </div>
            </div>
        </Scroll>
    )
}

HorizenScroll.propTypes = {
    valueType: PropTypes.string,
    list: PropTypes.array,
    title: PropTypes.string,
    value: PropTypes.string,
    hanleClick: PropTypes.func
}

HorizenScroll.defaultProps = {
    valueType: '',
    list: [],
    title: '',
    value: '',
    handleClick: null
}

export default memo(HorizenScroll)
