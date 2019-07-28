'use strict'

import React, { PropTypes } from 'react'
import './search.css'

const Search = ({ isDisabled, handleSearch }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='digite o nome do usuário no github'
      onKeyUp={handleSearch}
      disabled={isDisabled}

    />
  </div>
)
Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}
export default Search
