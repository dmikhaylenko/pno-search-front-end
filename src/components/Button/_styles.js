import withStyle from "react-jss"
import getColor from "../../common/getColor"

export default withStyle(({bg, text}) => {
    return {
        button: {
            "&, &:link, &:visited": {
                border: "none",
                outline: "none",
                textDecoration: "none",
                WebkitTapHighlightColor: "transparent",
                color: ({textColor: propsTextColor}) => {
                    return getColor(text, propsTextColor, "initial")
                },
                backgroundColor: ({bgColor}) => {
                    return getColor(bg, bgColor, "transparent")
                }
            },
            "@media (hover)": {
                "&:hover": {
                    opacity: 0.85
                }
            },
            "&:active": {
                opacity: 0.65
            }
        }
    }
})