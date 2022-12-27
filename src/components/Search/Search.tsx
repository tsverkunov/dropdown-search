import React, {useEffect} from 'react'
import './Search.scss'
import {useDebounce} from "../../hooks/useDebounce"
import {useDispatch, useSelector} from 'react-redux'
import {changeSearchWordAC, getUsers, setDropdownAC} from '../../redux/githubReducer'
import {IUser} from '../../models/models'

const Search = () => {
  const dispatch = useDispatch()
  const users = useSelector((state: any) => state.githubReducer.users)
  const searchWord = useSelector((state: any) => state.githubReducer.searchWord)
  const dropdown = useSelector((state: any) => state.githubReducer.dropdown)
  const debounced = useDebounce(searchWord)

  // useEffect(() => {
  //   setDropdown(debounced.length > 2 && items.length > 0)
  //   if (debounced.length > 2) {
  //     githubApi(debounced)
  //       .then((res) => {
  //         setItems(res.items)
  //       })
  //   }
  // }, [debounced, items])

  useEffect(() => {
    dispatch(setDropdownAC(false))
    if (debounced.length > 2) {
      // @ts-ignore
      dispatch(getUsers(debounced))
    }
  }, [debounced])

  return (
    <div className="search">
      <input type="text"
             className="search__input"
             placeholder="Search users..."
             value={searchWord}
             onChange={e => dispatch(changeSearchWordAC(e.target.value))}
      />
      {
        dropdown && <div className="search__result">
          <ul className="search__list">
            {users?.map((user: IUser) => <li className="search__item" key={user.id}>{user.login}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}

export default Search
