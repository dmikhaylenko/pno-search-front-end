import {combineReducers} from "redux"
import questions from "./questionsReducer"
import hasMore from "./hasMoreReducer"
import isLoadingProgress from "./isLoadingProgressReducer"
import isSearchingProgress from "./isSearchProgressReducer"

/**
 * Root reducer
 */
export default combineReducers({
    isSearchingProgress,
    isLoadingProgress,
    questions ,
    hasMore
})