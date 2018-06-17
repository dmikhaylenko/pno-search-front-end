import withStyle from "react-jss"

/**
 * HOC: Component styles
 * @author Dmitry Mikhaylenko
 */
export default withStyle(() => {
    return {
        progress: {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: ({isInProgress}) => isInProgress ? "16px 0" : 0
        }
    }
})