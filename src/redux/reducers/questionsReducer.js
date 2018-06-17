/**
 * Questions state reducer
 * @param state current state
 * @param action action
 * @returns next state
 * @author Dmitry Mikhaylenko
 */
export default (state = [], {type, payload}) => {
    switch (type) {
        case "SEARCH_SUCCESS":
            return [
                ...payload.response.questions
            ]
        case "LOAD_SUCCESS":
            return [...state,
                ...payload.response.questions
            ]
        default:
            return state;
    }
}