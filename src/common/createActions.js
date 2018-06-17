import {bindActionCreators} from "redux"
import remap from "./remap"

/**
 * Function builds root endpoint
 * @param protocol protocol name
 * @param host host name or IP address
 * @param port port number
 * @returns {string} endpoint
 * @author Dmitry Mikhaylenko
 */
function createEndpoint(protocol, host, port) {
    return !port
        ? `${protocol}://${host}`
        : `${protocol}://${host}:${port}`
}

/**
 * Function build map dispatch to props mapper
 * @param actionCreators action creators
 * @returns {function} map dispatch to props function
 * @author Dmitry Mikhaylenko
 */
export default actionCreators => config => {
    const {protocol, host, port} = config;
    const endpoint = createEndpoint(protocol, host, port)
    const creators = remap(actionCreators, (handler) => {
        return handler(endpoint)
    });

    return dispatch => {
        return {
            $actions: {
                ...bindActionCreators(creators, dispatch)
            }
        }
    }
}