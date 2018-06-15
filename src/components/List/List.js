import React from "react"

/**
 * List functional component
 * @param {Object} props 
 * @author Dmitry Mikhaylenko
 */
const List = ({classes, children}) => {
    return (<ul className={classes.list}>{children}</ul>);
}

export default List;