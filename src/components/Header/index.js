import React, { memo, forwardRef } from 'react'
import PropTypes from "prop-types"

import './index.scss'

const Header = forwardRef((props, ref) => {
    const { handleClick, title} = props
    return (
        <div className="header-wrapper">
            <i
                className="iconfont back"
                onClick={handleClick}>&#xe655;</i>
        </div>
    )
})

Header.defaultProps = {
    handleClick: () => {},
    title: "标题",
}
Header.propTypes = {
    handleClick: PropTypes.func,
    title: PropTypes.string,
}

export default memo(Header)
