import withStyle from "react-jss"
import getColor from "../../common/getColor"

/**
 * HOC: Component styles
 * @author Dmitry Mikhaylenko
 */
export default withStyle(({bg, text}) => {
    return {
        content: {
            color: ({textColor}) => getColor(text, textColor, "initial"),
            backgroundColor: ({bgColor}) => getColor(bg, bgColor, "transparent")
        }
    }
})