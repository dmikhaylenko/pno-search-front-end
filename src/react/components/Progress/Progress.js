import React, {Fragment} from "react";
import {Spinner} from "../Spinner";

/**
 * Progress functional component
 * @param {Object} props component properties
 * @author Dmitry Mikhaylenko
 */
const Progress = ({isInProgress, classes, children, spinnerColor}) => {
    return (<section className={classes.progress}>
        {
            isInProgress ? (
                <Spinner spinnerColor={spinnerColor}/>
            ) : (
                <Fragment>{children}</Fragment>
            )
        }
    </section>)
}

export default Progress;