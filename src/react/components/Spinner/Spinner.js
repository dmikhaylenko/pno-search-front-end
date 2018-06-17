import React from "react";

/**
 * Spinner functional component
 * @param {Object} props component properties
 * @author Dmitry Mikhaylenko
 */
const Spinner = ({classes}) => {
    return (<section className={classes.spinner}>
        <article className={classes.spinnerPart}></article>
        <article className={classes.spinnerPart}></article>
        <article className={classes.spinnerPart}></article>
        <article className={classes.spinnerPart}></article>
    </section>)
}

export default Spinner;