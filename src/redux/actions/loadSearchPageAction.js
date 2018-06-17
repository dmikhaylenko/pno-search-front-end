import createSearchQuery from "./createSearchQuery"
/**
 * Action creator handler
 * @param client API client
 * @returns action creator
 */
export default endpoint => (query, page) => {
    return createSearchQuery("LOAD", endpoint, query, page)
}