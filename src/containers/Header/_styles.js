import withStyle from "react-jss"
import getColor from "../../common/getColor"

/**
 * HOC: Component styles
 * @author Dmitry Mikhaylenko
 */
export default withStyle(({bg, text}) => {
    return {
        header: {
            display: "flex",
            padding: "24px 18px",
            position: "relative",
            backgroundColor: ({bgColor}) => {
                return getColor(bg, bgColor, "transparent")
            }
        },
        logo: {
            flex: "1 1 auto"
        },
        search: {
            flex: "0 0 auto"
        },
        searchIcon: {
            fill: ({textColor}) => getColor(text, textColor, "initial")
        },
        searchForm: {
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "absolute",
            display: ({showSearchForm}) => showSearchForm ? "block" : "none"
        },
        searchInput: {
            width: "100%",
            height: "100%",
            fontSize: "2em"
        }
    }
})