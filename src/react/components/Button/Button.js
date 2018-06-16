import React from "react";
import omit from "lodash/omit";
import cNames from "classnames"

/**
 * Prop names which should be filtered
 */
const CUSTOM_PROPS = [
    "theme", "classes", "bgColor", "textColor", "classNames"
]

/**
 * Button functional component
 * @param {Object} props 
 * @author Dmitry Mikhaylenko
 */
const Button = (props) => {
    const {
        classes,
        classNames
    } = props;

    const tag = !("href" in props)
        ? "button"
        : "a";
    return React.createElement(tag, {...omit(props, CUSTOM_PROPS),
        className: cNames(classes.button, classNames)
    })
}

export default Button;