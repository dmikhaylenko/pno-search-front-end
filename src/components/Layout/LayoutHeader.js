import React from "react"

/**
 * Layout header functional component
 * @param {Object} props properties
 * @author Dmitry Mikhaylenko
 */
const LayoutHeader = ({domRef, classes, children}) => {
    return (<header ref={domRef} className={classes.header}>{children}</header>)
}

export default LayoutHeader;