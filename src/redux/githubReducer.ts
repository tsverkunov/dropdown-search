const initialState = {}

export const githubReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'GITHUB_SEARCH_USER':
      return {
        state
      }
    default:
      return state
  }
}

// Action creator
export const githubActionCreator = () => ({type: 'GITHUB_SEARCH_USER'})
