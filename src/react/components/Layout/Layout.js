import React from "react";

/**
 * Layout functional component
 * @param {Object} props properties
 */
const Layout = ({classes, children}) => {
    return (<section className={classes.layout}>{children}</section>)
}

export default Layout;