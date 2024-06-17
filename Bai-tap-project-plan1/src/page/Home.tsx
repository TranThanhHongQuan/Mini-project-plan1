import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Layout, Row, Col, Spin, Alert } from 'antd';
import Header from '../Component/Header';
import Filters from '../Component/Filters';
import 'antd/dist/reset.css'; 
import AppFooter from '../Component/Footer';
import MovieSlider from '../Component/MovieSlider'; 
import Banner from '../Component/Banner'; 
import Sidebar from '../Component/Sidebar'; 

const { Content, Sider } = Layout;

const fetchPopularMovies = async () => {
  try {
    const { data } = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=bbf4abc4e3112c3a8b28301c1ad039ee');
    return data.results;
  } catch (error) {
    throw new Error('Failed to fetch popular movies');
  }
};

const fetchNowPlayingMovies = async () => {
  try {
    const { data } = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=bbf4abc4e3112c3a8b28301c1ad039ee');
    return data.results;
  } catch (error) {
    throw new Error('Failed to fetch now playing movies');
  }
};

const fetchTopRated = async () => {
  try {
    const { data } = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=bbf4abc4e3112c3a8b28301c1ad039ee');
    return data.results;
  } catch (error) {
    throw new Error('Failed to fetch top rated movies');
  }
};

const Home = () => {
  const { data: popularMovies, isLoading: isLoadingPopular, error: errorPopular } = useQuery({
    queryKey: ['popularMovies'],
    queryFn: fetchPopularMovies,
  });

  const { data: nowPlayingMovies, isLoading: isLoadingNowPlaying, error: errorNowPlaying } = useQuery({
    queryKey: ['nowPlayingMovies'],
    queryFn: fetchNowPlayingMovies,
  });

  const { data: topratedMovies, isLoading: isLoadingTopRated, error: errorToprated } = useQuery({
    queryKey: ['topratedMovies'],
    queryFn: fetchTopRated,
  });

  if (isLoadingPopular || isLoadingNowPlaying || isLoadingTopRated) return <Spin tip="Loading..." />;
  if (errorPopular || errorNowPlaying || errorToprated) {
    return <Alert message="Error" description={errorPopular?.message || errorNowPlaying?.message || errorToprated?.message} type="error" showIcon />;
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Layout>
        {popularMovies && <Banner movie={popularMovies[0]} />} 
        <Sidebar /> {/* Add Sidebar */}
        <Layout style={{ marginLeft: 80, padding: '20px' }}>
          <Content>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <MovieSlider movies={popularMovies} title="Popular Movies" />
              </Col>
              <Col span={24}>
                <MovieSlider movies={nowPlayingMovies} title="Now Playing" />
              </Col>
              <Col span={24}>
                <MovieSlider movies={topratedMovies} title="Top Rated" />
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
      <AppFooter />
    </Layout>
  );
};

export default Home;
