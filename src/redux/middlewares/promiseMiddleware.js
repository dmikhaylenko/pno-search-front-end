/**
 * This middleware takes promise action and resolve promise.
 * It generate the next action types:
 * 1) REQUEST_TYPE - will triggered before promise resolving
 * 2) SUCCESS_TYPE - will triggered if promise was not rejected
 * 3) FAIL_TYPE - will triggered if promise was rejected
 */
export default store => next => action => {
    const {type, payload} = action;
    switch (type) {
        case "PROMISE":
            const {actions, promise} = payload;
            const [requestType, successType, failType] = actions;
            next({type: requestType});
            if (!promise) {
                throw new Error("Promise can not be null for \"PROMISE\" action type")
            }
            promise.then(response => response.json().then(json => {
                const type = response.ok ? successType : failType
                next({
                    type,
                    payload: {
                        status: response.status,
                        response: json
                    }
                })
            }))
            break
        default:
            next(action)
    }
}