import React from "react";
import omit from "lodash/omit";

const CUSTOM_PROPS = [
    "theme", "classes", "bgColor", "textColor",

]

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