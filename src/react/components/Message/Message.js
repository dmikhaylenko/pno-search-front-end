import React from "react";
import {Text} from "../Text";

/**
 * Progress functional component
 * @param {Object} props component properties
 * @author Dmitry Mikhaylenko
 */
const Message = ({classes, text}) => {
    return (<section className={classes.message}>
        <Text textColor="inversePrimary" textWeight="bold">{text}</Text>
    </section>)
}

export default Message;