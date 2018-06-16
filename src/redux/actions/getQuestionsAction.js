import promiseAction from "../../common/promiseAction"

/**
 * Action creator handler
 * @param client API client
 * @returns action creator
 */
export default client => (query, page) => {
    const promise = client.getQuestions(query, page)
    return promiseAction("SEARCH", "SEARCH_SUCCESS", "SEARCH_FAIL", promise)
}