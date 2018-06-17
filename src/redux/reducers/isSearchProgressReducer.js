/**
 * Is operation in progress state reducer
 * @param state current state
 * @param action action
 * @returns next state
 * @author Dmitry Mikhaylenko
 */
export default (state = false, {type}) => {
    switch (type) {
        case "SEARCH":
            return true
        default:
            return false;
    }
}