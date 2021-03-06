import React from "react"

/**
 * List item functional component
 * @param {Object} props 
 * @author Dmitry Mikhaylenko
 */
const ListItem = ({classes, children}) => {
    return (<li className={classes.listItem}>{children}</li>);
}

export default ListItem;