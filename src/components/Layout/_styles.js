import withStyle from "react-jss"

export default withStyle({
    layout: {
        height: "100%"
    },
    header: {
        top: 0,
        width: "100%",
        position: "fixed"
    },
    content: {
        marginTop: ({top}) => {
            return `${top || 0}px`
        }
    },
})