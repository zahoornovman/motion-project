import React from 'react'
import { Search } from './styledPosts/styles'
import SearchIcon from '../assets/svgs/search_icon.svg'
function SearchBar() {
  return (
    <Search>
      <div className='left'>
        <img src={SearchIcon} alt='search'/>
        <input placeholder='Search posts...'></input>
      </div>
      <div className='right'>
        <p>Liked</p>
        <p>Friends</p>
        <p>Follow</p>
      </div>
    </Search>
  )
}

export default SearchBar
