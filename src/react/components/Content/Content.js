import React from "react";

/**
 * Content functional component
 * @param {Object} props component properties
 * @author Dmitry Mikhaylenko
 */
const Content = ({classes, children}) => {
    return (<section className={classes.content}>
        {children}
    </section>)
}

export default Content;