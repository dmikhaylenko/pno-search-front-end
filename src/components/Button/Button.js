import React from "react";
import omit from "lodash/omit";
/**
 * Prop names which should be filtered
 */
const CUSTOM_PROPS = [
    "theme", "classes", "bgColor", "textColor",

]

/**
 * Button functional component
 * @param {Object} props 
 * @author Dmitry Mikhaylenko
 */
const Button = (props) => {
    const {
        classes
    } = props;

    const tag = !("href" in props)
        ? "button"
        : "a";

    return React.createElement(tag, {...omit(props, CUSTOM_PROPS),
        className: classes.button
    })
}

export default Button;