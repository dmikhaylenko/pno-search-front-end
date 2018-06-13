import React from "react";

const Layout = ({classes, children}) => {
    return (<section className={classes.layout}>{children}</section>)
}

export default Layout;