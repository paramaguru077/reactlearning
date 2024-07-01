import React from 'react'

const Search = ({search,setSearch}) => {
  return (
    <form className='addForm' onSubmit={(e)=> e.preventDefault()}>
        <label htmlFor="search"> search</label>
        <input type="text" id="search"
        role='searchbox'
        placeholder='search items'
        value={search}
        onChange={(e)=> setSearch(e.target.value)} />

    </form>
  )
}

export default Search
