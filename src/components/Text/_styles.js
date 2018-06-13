import withStyle from "react-jss"
import getColor from "../../common/getColor"

const WEIGHTS = {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900
}

const STYLES = ["normal", "italic"]

export default withStyle(({text: textTheme}) => {
    return {
        text: {
            color: "inherit",
            fontFamily: "Roboto",
            fontStyle: ({style}) => style in STYLES ? style : "normal",
            fontWeight: ({weight}) => weight in WEIGHTS ? WEIGHTS[weight] : 100,
            color: ({textColor}) => {
                return getColor(textTheme, textColor, "inherit")
            }
        }
    }
})