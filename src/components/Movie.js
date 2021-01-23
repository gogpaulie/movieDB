import React from 'react';

function Movie({ movieTitle, posterPath, overview, voteAverage }) {
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/w1280';

  function getClassByRate(vote) {
    if (vote >= 8) {
      return 'green';
    } else if (vote >= 5) {
      return 'orange';
    } else {
      return 'red';
    }
  }

  return (
    <div className='movie'>
      <img src={`${IMAGE_PATH}${posterPath}`} alt='' />
      <div className='movie-info'>
        <h3>{movieTitle}</h3>
        <span className={getClassByRate(voteAverage)}>{voteAverage}</span>
      </div>
      <div className='overview'>
        <h3>Overview</h3>
        {overview}
      </div>
    </div>
  );
}

export default Movie;
