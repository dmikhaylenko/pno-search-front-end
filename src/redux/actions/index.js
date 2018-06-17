import loadSearchPage from "./loadSearchPageAction"
import searchQuestions from "./searchQuestionAction"
import createActions from "../../common/createActions"
/**
 * Action handlers
 * @type {{getQuestionsAction: Function}}
 */
const ACTIONS = {
    searchQuestions,
    loadSearchPage
}

export default createActions(ACTIONS)