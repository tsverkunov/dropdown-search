import {CHANGE_SEARCH_WORD, GITHUB_SEARCH_USERS, SET_DROPDOWN} from './constants'
import {githubApi} from '../api/github.api'
import {IState} from '../models/models'
import {AnyAction} from 'redux'
import {ThunkAction} from 'redux-thunk'

const initialState: IState = {
  users: [],
  searchWord: '',
  dropdown: false
}

export const githubReducer = (state: IState = initialState, action: AnyAction) => {
  switch (action.type) {
    case GITHUB_SEARCH_USERS:
      return {
        ...state, users: action.payload
      }
    case CHANGE_SEARCH_WORD:
      return {
        ...state, searchWord: action.payload
      }
    case SET_DROPDOWN:
      return {
        ...state, dropdown: action.payload
      }
    default:
      return state
  }
}

// Action creators
export const getUsersAC = (payload: any) => ({type: GITHUB_SEARCH_USERS, payload})
export const changeSearchWordAC = (payload: any) => ({type: CHANGE_SEARCH_WORD, payload})
export const setDropdownAC = (payload: any) => ({type: SET_DROPDOWN, payload})

export function getUsers(debounced: string): ThunkAction<void, any, any, any> {
  return async function (dispatch: any) {
    const data = await githubApi(debounced)
    // .then((res) => {
    dispatch(setDropdownAC(true))
    dispatch(getUsersAC(data.items))
    // })
  }
}
