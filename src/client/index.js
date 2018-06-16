import getQuestions from "./getQuestions"
import createClient from "../common/createClient"

/**
 * API HANDLERS MAP
 * @type {{getQuestions: Function}}
 */
const API_METHODS = {
    getQuestions
}


export default createClient(API_METHODS)
