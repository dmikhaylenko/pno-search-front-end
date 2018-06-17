import withStyle from "react-jss"

/**
 * HOC: Component styles
 * @author Dmitry Mikhaylenko
 */
export default withStyle(() => {
    return {
        message: {
            width: "100%",
            display: "block",
            padding: "64px 0",
            textAlign: "center"
        }
    }
})