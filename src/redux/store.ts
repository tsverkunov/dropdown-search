import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import {githubReducer} from "./githubReducer";


let rootReducer = combineReducers({
  githubReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store




