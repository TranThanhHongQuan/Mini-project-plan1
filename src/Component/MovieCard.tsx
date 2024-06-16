import React from 'react';
import { Movie } from './Movie.tsx';

interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  const thumb = movie.poster_path
    ? `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`
    : 'default-placeholder-url';

  return (
    <div>
      <img src={thumb} alt={movie.title} />
      <h3>{movie.title}</h3>
    </div>
  );
};

export default MovieCard;
