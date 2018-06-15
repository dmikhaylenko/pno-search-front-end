import withStyle from "react-jss"

/**
 * HOC: Component styles
 * @author Dmitry Mikhaylenko
 */
export default withStyle(({bg, text}) => {
    return {
        list: {
            margin: 0,
            padding: 0,
            width: "100%"
        },
        listItem: {
            margin: 0,
            padding: 0,
            width: "100%",
            listStyle: "none"
        }
    }
})