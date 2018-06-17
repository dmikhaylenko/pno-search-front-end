import React from "react";

/**
 * Progress functional component
 * @param {Object} props component properties
 * @author Dmitry Mikhaylenko
 */
const Text = ({classes, children}) => {
    return (<span className={classes.text}>{children}</span>)
}

export default Text;