import React from 'react';

function Header({ searchMovies }) {
  function handleSubmit(e) {
    e.preventDefault();
    searchMovies(e.target[0].value);
  }

  return (
    <header>
      <form id='form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Search movies...'
            id='search'
            className='search'
          />
          <button className='search-button' type='submit'>
            <i className='fas fa-search'></i>
          </button>
        </div>
      </form>
    </header>
  );
}

export default Header;
