/**
 * Has more state reducer
 * @param state current state
 * @param action action
 * @returns next state
 * @author Dmitry Mikhaylenko
 */
export default (state = false, action) => {
    const {type, payload} = action;
    switch (type) {
        case "SEARCH_SUCCESS":
        case "LOAD_SUCCESS":
            return payload.response.hasMore
        case "SEARCH_FAILURE":
        case "LOAD_FAILURE":
            return false
        default:
            return state;
    }
}