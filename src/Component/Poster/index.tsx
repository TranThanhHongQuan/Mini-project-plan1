import React from 'react';
import { Row, Col } from 'antd';
import './MoviesList.css';

const MoviesList = ({ title, movies }) => {
  return (
    <div className="movies-list">
      <h2>{title}</h2>
      <Row gutter={[16, 16]}>
        {movies.map((movie) => (
          <Col key={movie.id} xs={24} sm={12} md={8} lg={6} xl={4}>
            <div className="movie-poster">
              <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt={movie.title} />
              <h3>{movie.title}</h3>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MoviesList;

