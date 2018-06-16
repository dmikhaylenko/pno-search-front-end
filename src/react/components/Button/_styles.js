import withStyle from "react-jss"
import getColor from "../../../common/getColor"

/**
 * HOC: Component styles
 * @author Dmitry Mikhaylenko
 */
export default withStyle(({bg, text}) => {
    return {
        button: {
            "&, &:link, &:visited": {
                border: "none",
                outline: "none",
                textDecoration: "none",
                WebkitTapHighlightColor: "transparent",
                color: ({textColor: propsTextColor}) => {
                    return getColor(text, propsTextColor, "inherit")
                },
                backgroundColor: ({bgColor}) => {
                    return getColor(bg, bgColor, "transparent")
                }
            },
            "@media (hover)": {
                "&:hover": {
                    opacity: 0.85,
                    cursor: "pointer"
                }
            },
            "&:active": {
                opacity: 0.65
            }
        }
    }
})