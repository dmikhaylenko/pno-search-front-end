/**
 * Search question handler
 * @param fetch fetch module
 * @param endpoint root endpoint
 * @returns API method
 */
export default (fetch, endpoint) => (searchQuery, pageNumber) => {
    return fetch(`${endpoint}/questions?search=${searchQuery}&page=${pageNumber}`)
}