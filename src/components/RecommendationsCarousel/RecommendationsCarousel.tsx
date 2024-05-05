import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import { getRecomendation } from '../../services';

const RecommendedMoviesCarousel: React.FC<{ id: string }> = ({ id }) => {
  const [recommendedMovies, setRecommendedMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchRecommendedMovies = async () => {
      try {
        const response = await getRecomendation(id);
        setRecommendedMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching recommended movies:', error);
      }
    };

    fetchRecommendedMovies();
  }, [id]);

  return (
    <Carousel
      responsive={{
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
      }}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
    >
      {recommendedMovies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          genreId={movie.genre_ids[0]}
          movieId={movie.id}
          voteAverage={movie.vote_average}
          posterPath={movie.poster_path} sinopsis={''} runtime={0} year={0}        />
      ))}
    </Carousel>
  );
};
export default RecommendedMoviesCarousel;