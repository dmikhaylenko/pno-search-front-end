/**
 * Method takes handlers map and callback for handlers calling,
 * and return object where key is handler name and value is handler
 * result
 * @param handlers handlers map
 * @param callback function which call handler and return result
 * @returns {Object} methods map
 */
export default (handlers, callback) => {
    return Object.keys(handlers).map((key) => {
        return {
            method: key,
            handler: handlers[key]
        }
    }).reduce((methods, {method, handler}) => {
        return {...methods,
            [method]: callback(handler)
        }
    }, {})
}