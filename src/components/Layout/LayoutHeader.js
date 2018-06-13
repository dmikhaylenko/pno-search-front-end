import React from "react"

const LayoutHeader = ({domRef, classes, children}) => {
    return (<header ref={domRef} className={classes.header}>{children}</header>)
}

export default LayoutHeader;