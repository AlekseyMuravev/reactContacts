import React, { Fragment, memo } from 'react'

const Button = memo(function Button({ children, onClick, className }) {
    return (
        <Fragment>
            <button className={className} onClick={onClick}>{children}</button>
        </Fragment>
    )
})

export default Button
