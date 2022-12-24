import React, {useEffect, useState} from 'react';
import './Search.scss'
import {useDebounce} from "../../hooks/useDebounce";
import {githubApi} from "../../api/github.api";

const Search = () => {
  const [search, setSearch] = useState('')
  const [items, setItems] = useState([])
  const debounced = useDebounce(search)

  useEffect(() => {
    if (debounced.length > 2) {
      githubApi(debounced)
        .then((res) => {
          setItems(res.items)
        })
    }
  }, [debounced])

  return (
    <div className="search">
      <input type="text"
             className="search__input"
             placeholder="Search users..."
             value={search}
             onChange={e => setSearch(e.target.value)}
      />
      <div className="search__result">
        <ul className="search__list">
          {items.map((item: any) => <li className="search__item" key={item.id}>{item.login}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Search;
