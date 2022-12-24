import {IUser, ServerResponse} from "../models/models";

const baseUrl = 'https://api.github.com/search/users?q='

const checkResponse = (res: { ok: any; json: () => any; }) => {
  if (res.ok) {
    return res.json()
  }
  return res.json()
    .then((data: any) => {
      throw new Error('Error message!')
    })
}

export const githubApi = (url: string, portion = 10) => {
  return fetch(`${baseUrl}${url}&per_page=${portion}`, {
    method: 'GET',
  })
    .then(checkResponse)
}
