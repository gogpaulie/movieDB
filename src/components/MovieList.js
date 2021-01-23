import React from 'react';
import Movie from './Movie';

function MovieList({ movies }) {
  return (
    <main className='main'>
      {movies.map((movie) => {
        return (
          <Movie
            key={movie.id}
            movieTitle={movie.title}
            posterPath={movie.poster_path}
            voteAverage={movie.vote_average}
            overview={movie.overview}
          />
        );
      })}
    </main>
  );
}

export default MovieList;
