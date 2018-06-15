import withStyle from "react-jss"

/**
 * HOC: Component styles
 * @author Dmitry Mikhaylenko
 */
export default withStyle({
    layout: {
        height: "100%"
    },
    header: {
        top: 0,
        width: "100%",
        position: "fixed",
        zIndex: 100
    },
    content: {
        paddingTop: ({top}) => {
            return `${top || 0}px`
        }
    },
})