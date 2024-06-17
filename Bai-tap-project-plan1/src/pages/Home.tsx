import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Layout, Row, Col, Spin, Alert, Button } from 'antd';
import Header from '../Component/Header';
import 'antd/dist/reset.css'; 
import AppFooter from '../Component/Footer';
import MovieSlider from '../Component/MovieSlider'; 
import Banner from '../Component/Banner'; 
import Sidebar from '../Component/Sidebar';

const { Content } = Layout;

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
      <Layout style={{ display: 'flex', background: '#f0f2f5' }}>
        <Sidebar />
        <Layout style={{ flex: '1 1 75%', overflow: 'hidden' }}>
          <Header />
          <Content style={{ background: '#fff', padding: '20px', minHeight: 'calc(100vh - 64px)' }}>
            {popularMovies && (
              <div style={{ marginBottom: 40 }}>
                <Banner movie={popularMovies[0]} />
                <div style={{ marginTop: 20 }}>
                  <h2>Popular Movies</h2>
                  <MovieSlider movies={popularMovies} title="Popular Movies" />
                </div>
              </div>
            )}
            {nowPlayingMovies && (
              <div style={{ marginTop: 40 }}>
                <h2>Movies and Shows</h2>
                <MovieSlider movies={nowPlayingMovies} title="Movies and Shows" />
              </div>
            )}
            <Row gutter={[16, 16]} style={{ marginTop: 40 }}>
              <Col span={24}>
                <MovieSlider movies={topratedMovies} title="Top Rated" />
              </Col>
            </Row>
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <Button type="primary">Next page</Button>
            </div>
          </Content>
          <AppFooter />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Home;
