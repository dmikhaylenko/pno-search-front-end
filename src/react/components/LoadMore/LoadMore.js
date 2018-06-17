import React from "react";
import {Button} from "../Button"
import {Progress} from "../Progress"
/**
 * Load more functional component
 * @param {Object} props component properties
 * @author Dmitry Mikhaylenko
 */
const LoadBlock = ({isLoadingProgress, classes, children, onLoadClick}) => {
    return (<section className={classes.loadMore}>
        <Progress isInProgress={isLoadingProgress} spinnerColor="secondary">
            <Button bgColor="primary" textColor="primary" classNames={classes.loadMoreButton} onClick={event => {
                onLoadClick && onLoadClick(event)
                event.stopPropagation()
            }}>{children}</Button>
        </Progress>

    </section>)
}

export default LoadBlock;