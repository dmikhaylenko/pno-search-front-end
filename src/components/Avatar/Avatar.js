import React from "react"

/**
 * Avatar functional component
 * @param {Object} props 
 * @author Dmitry Mikhaylenko
 */
const Avatar = ({classes}) => {
    return (<section className={classes.avatar}>
            <article className={classes.avatarImage}></article>
        </section>);
}

export default Avatar;