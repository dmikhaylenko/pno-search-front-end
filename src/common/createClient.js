import fetch from "isomorphic-fetch";
import remap from "./remap"

/**
 * Function builds the root endpoint
 * @param protocol protocol name (like http, https)
 * @param host host name or IP address
 * @param port port number(optional parameter)
 * @returns {string} root endpoint
 * @author Dmitry Mikhaylenko
 */
function createRootEndpoint(protocol, host, port) {
    return !port
        ? `${protocol}://${host}`
        : `${protocol}://${host}:${port}`
}

/**
 * Function builds API client factory
 * @param methods API method handlers map
 * @returns {function(*=, *=, *=): {[p: string]: *}} client factory method which
 * takes protocol type, host name and port and makes API client
 * @author Dmitry Mikhaylenko
 */
export default methods => (protocol, host, port) => {
    return remap(methods, (handler) => {
        return handler(fetch, createRootEndpoint(protocol, host, port))
    })
}