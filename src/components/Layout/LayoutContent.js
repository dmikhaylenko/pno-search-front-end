import React from "react";

/**
 * Layout content functional component
 * @param {Object} props properties
 * @author Dmitry Mikhaylenko
 */
const LayoutContent = ({classes, children}) => {
    return (<main className={classes.content}>{children}</main>)
}

export default LayoutContent;