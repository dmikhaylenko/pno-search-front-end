import React from "react";
import {Button} from "../Button"

/**
 * Load more functional component
 * @param {Object} props component properties
 * @author Dmitry Mikhaylenko
 */
const LoadBlock = ({classes, children, onLoadClick}) => {
    return (<section className={classes.loadMore}>
        <Button bgColor="primary" textColor="primary" classNames={classes.loadMoreButton} onClick={event => {
            onLoadClick && onLoadClick(event)
            event.stopPropagation()
        }}>{children}</Button>
    </section>)
}

export default LoadBlock;