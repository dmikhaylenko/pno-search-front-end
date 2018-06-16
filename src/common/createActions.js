import {bindActionCreators} from "redux"
import remap from "./remap"

/**
 * Function build map dispatch to props mapper
 * @param actionCreators action creators
 * @returns {function} map dispatch to props function
 */
export default actionCreators => api => {
    const creators = remap(actionCreators, (handler) => {
        return handler(api)
    });

    return dispatch => {
        return {
            $actions: {
                ...bindActionCreators(creators, dispatch)
            }
        }
    }
}