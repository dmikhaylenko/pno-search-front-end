import withStyle from "react-jss"
import getColor from "../../common/getColor"

export default withStyle(({bg}) => {
    return {
        header: {
            display: "flex",
            padding: "24px 12px",
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
        }
    }
})