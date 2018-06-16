import withStyle from "react-jss"
import getColor from "../../../common/getColor"

/**
 * HOC: Component styles
 * @author Dmitry Mikhaylenko
 */
export default withStyle(({bg}) => {
    return {
        loadMore: {
            padding:  "10px 24px",
            backgroundColor: () => getColor(bg, "secondaryDark", "transparent"),
            display: ({show}) => show ? "block" : "none"
        },
        loadMoreButton: {
            width: "100%",
            display: "block",
            padding: "20px 0",
            borderRadius: "3px"
        }
    }
})