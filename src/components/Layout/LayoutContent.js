import React from "react";

const LayoutContent = ({classes, children}) => {
    return (<main className={classes.content}>{children}</main>)
}

export default LayoutContent;