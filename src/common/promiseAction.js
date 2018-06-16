export default (requestType, successActionType, failActionType, promise) => {
    return {
        type: "PROMISE",
        payload: {
            actions: [requestType, successActionType, failActionType],
            promise: promise
        }
    }
}