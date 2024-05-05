import React from 'react';
import { MovieCard } from '../../components/MovieCard';
import MovieCarousel from '../../components/MovieCarousel/MovieCarousel';
import { movies } from '../../constants/moviesMock';

const Home: React.FC = () => {
 
    return (
      <div className="p-4">
        <h1 className="text-4xl mb-8 ml-8">Popular</h1>
        <MovieCarousel movieType="popular" />
        <h1 className="text-4xl mt-8 mb-8 ml-8">Top Rated</h1>
        <MovieCarousel movieType="topRated" />
        <h1 className="text-4xl mt-8 mb-8 ml-8">Now Playing</h1>
        <MovieCarousel movieType="nowPlaying" />
       
      </div>
    );
  };
  
  export default Home;