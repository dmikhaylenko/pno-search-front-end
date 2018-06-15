import withStyle from "react-jss"
import getColor from "../../common/getColor"

/**
 * Text weights map
 */
const WEIGHTS = {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900
}

/**
 * Possible text styles
 */
const STYLES = ["normal", "italic"]

/**
 * HOC: Component styles
 * @author Dmitry Mikhaylenko
 */
export default withStyle(({text: textTheme}) => {
    return {
        text: {
            color: "inherit",
            fontFamily: "Roboto",
            fontSize: ({size}) => size || "1em",
            fontStyle: ({style}) => STYLES.indexOf(style) > 0 ? style : "normal",
            fontWeight: ({weight}) => weight in WEIGHTS ? WEIGHTS[weight] : 100,
            color: ({textColor}) => {
                return getColor(textTheme, textColor, "inherit")
            }
        }
    }
})