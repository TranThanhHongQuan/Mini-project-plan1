
import React from 'react';
import { Movie } from './Movie.tsx';
import { PlayCircleOutlined } from '@ant-design/icons';
import './MovieCard.css';

interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  const thumb = movie.poster_path
    ? `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`
    : 'default-placeholder-url';

  return (
    <div className="movie-card">
      <img src={thumb} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <button className="play-button">
          <PlayCircleOutlined style={{ fontSize: 24, color: '#f90' }} />
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
