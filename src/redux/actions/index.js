import getQuestionsAction from "./getQuestionsAction"
import createActions from "../../common/createActions"

/**
 * Action handlers
 * @type {{getQuestionsAction: Function}}
 */
const ACTIONS = {
    getQuestionsAction
}

export default createActions(ACTIONS)