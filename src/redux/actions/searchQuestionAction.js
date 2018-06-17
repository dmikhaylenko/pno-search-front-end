import createSearchQuery from "./createSearchQuery"
/**
 * Action creator handler
 * @param client API client
 * @returns action creator
 */
export default endpoint => (query) => {
    return createSearchQuery("SEARCH", endpoint, query, 1)
}