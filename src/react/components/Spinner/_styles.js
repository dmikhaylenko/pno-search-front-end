import withStyle from "react-jss"
import getColor from "../../../common/getColor"

/**
 * HOC: Component styles
 * @author Dmitry Mikhaylenko
 */
export default withStyle(({text: textTheme}) => {
    return {
        spinner: {
            width: "32px",
            height: "32px",
            position: "relative",
            display: "inline-block",
            opacity: 1
        },
        spinnerPart: {
            margin: "3px",
            width: "26px",
            height: "26px",
            display: "block",
            border: "3px solid",
            borderRadius: "50%",
            position: "absolute",
            animation: "ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
            borderColor: ({spinnerColor}) => `transparent ${getColor(textTheme, spinnerColor, "transparent")} transparent transparent `,
            "&:nth-child(1)": {
                animationDelay: "-0.45s"
            },
            "&:nth-child(2)": {
                animationDelay: "-0.3s"
            },
            "&:nth-child(3)": {
                animationDelay: "-0.15s"
            },
        },
        "@keyframes ring": {
            "0%": {
                transform: "rotate(0deg)"
            },
            "100%": {
                transform: "rotate(360deg)"
            }
        }

    }
})