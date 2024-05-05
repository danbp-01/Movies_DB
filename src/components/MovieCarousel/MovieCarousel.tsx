import React, { useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import { getPopularMovies, getTopRatedMovies, getNowPlayingMovies, getMyFavoritesMovies, getRecomendation } from "../../services";
import './MovieCarousel.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1380 },
    items: 5.5,
    partialVisibilityGutter: 60,
  },
  midpoint: {
    breakpoint: { max: 1380, min: 1180 },
    items: 4.5,
    partialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1180, min: 900 },
    items: 3.5,
    partialVisibilityGutter: 50,
  },
  secondMidpoint : {
    breakpoint: { max: 900, min: 680 },
    items: 2.5,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: { max: 680, min: 0 },
    items: 1.5,
  },
};
const MoviesCarousel: React.FC<{ movieType: string }> = ({ movieType }) => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let moviesResponse;
        switch (movieType) {
          case 'popular':
            moviesResponse = await getPopularMovies();
            break;
          case 'topRated':
            moviesResponse = await getTopRatedMovies();
            break;
          case 'nowPlaying':
            moviesResponse = await getNowPlayingMovies();
            break;
          default:
            moviesResponse = await getPopularMovies();
            break;
        }
        const moviesData = moviesResponse.data.results;
        setMovies(moviesData);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, [movieType]);
  return (
    <Carousel
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType="desktop"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          genreId={movie.genre_ids[0]}
          movieId={movie.id}
          voteAverage={movie.vote_average}
          posterPath={movie.poster_path}
          sinopsis={movie.overview}
          runtime={movie.runtime}
          year={movie.release_date}
          
        />
      ))}
    </Carousel>
  );
}

export default MoviesCarousel;