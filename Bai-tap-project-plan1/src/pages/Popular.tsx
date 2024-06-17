import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MovieCard from '../Component/MovieCard.tsx';
import { Pagination } from 'antd';

const fetchPopularMovies = async ({ queryKey }) => {
  const [, page] = queryKey;
  const { data } = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=bbf4abc4e3112c3a8b28301c1ad039ee');
  return data;
};

const Popular = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useQuery(['popularMovies', page], fetchPopularMovies);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Popular Movies</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination
        current={page}
        total={data.total_results}
        pageSize={20}
        onChange={(page) => setPage(page)}
      />
    </div>
  );
};

export default Popular;
