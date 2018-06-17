import {createFetch, params} from "http-client"

/**
 * High order function which is middleware accepted to
 * API call. This middleware check action type and if
 * it has \"API_CALL\" value, middleware try to parse
 * request  metadata, build request and call API.
 * Before API calling, middleware trigger the action,
 * with type the same like \"type\" parameter of request
 * metadata. Then will triggered success or failure action,
 * according to API calling result.
 * @param store store
 * @returns {function} middleware
 */
export default store => next => action => {
    if (action.type !== "API_CALL") {
        return next(action)
    }

    const {
        payload: {
            request
        }
    } = action;

    const {type, url, parameters} = request;

    if (!type) {
        throw new Error("Request type name is required parameter")
    }

    if (!url) {
        throw new Error("URL is required parameter")
    }

    const successType = getActionType(type, "SUCCESS"),
        failureType = getActionType(type, "FAILURE");

    store.dispatch({
        type,
        payload: request
    });

    // CREATE QUERY PREDICATES
    const fetchPredicates = [];

    // Add request parameters
    if (params) {
        fetchPredicates.push(params(parameters))
    }

    // CREATE FETCH AND CALL API
    const fetch = createFetch.apply(null, fetchPredicates)
    fetch(url).then(response => response.json().then(data => {
        const type = response.ok
            ? successType
            : failureType
        store.dispatch({
            type,
            payload: {
                request,
                response: data
            }
        })
    }))
}

function getActionType(requestType, suffix) {
    return `${requestType}_${suffix}`.toUpperCase()
}