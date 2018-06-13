import "typeface-roboto";
import React from "react";

const Text = ({classes, children}) => {
    return (<span className={classes.text}>{children}</span>)
}

export default Text;