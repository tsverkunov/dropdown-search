import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"
import thunk from "redux-thunk"
import {githubReducer} from "./githubReducer"
import {composeWithDevTools} from '@redux-devtools/extension'

let rootReducer = combineReducers({
  githubReducer
})

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
  // compose(
  //   applyMiddleware(thunk),
  //   (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  // )
)

export default store




