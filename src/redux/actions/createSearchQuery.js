/**
 * Function creates "API_CALL" template for search question
 * @param type request type
 * @param endpoint endpoint
 * @param query query parameter
 * @param page page number
 * @returns "API_CALL" template
 */
export default (type, endpoint, query, page) => {
    return {
        type: "API_CALL",
        payload: {
            request: {
                type,
                url: `${endpoint}/questions`,
                parameters: {
                    search: query,
                    page
                }
            }
        }
    }
}