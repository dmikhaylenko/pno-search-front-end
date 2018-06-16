import withStyle from "react-jss"
import getColor from "../../../common/getColor"

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
            fontFamily: "Roboto",
            fontSize: ({size}) => size || "1em",
            fontStyle: ({textStyle}) => STYLES.indexOf(textStyle) > 0 ? textStyle : "normal",
            fontWeight: ({textWeight}) => textWeight in WEIGHTS ? WEIGHTS[textWeight] : 100,
            color: ({textColor}) => {
                return getColor(textTheme, textColor, "inherit")
            }
        }
    }
})