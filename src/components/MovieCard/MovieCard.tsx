///imports
import React from "react";
import { IMovieCard } from "./types";
import { IMAGE_SOURCE } from "../../constants/moviesMock";
import { Pill } from "../Pill";
import genresData from '../../constants/genres.json';
import './MovieCard.css';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from "../../routes/constants";

const MovieCard: React.FC<IMovieCard> = ({
    title,
    genreId,
    movieId,
    voteAverage,
    posterPath,
    sinopsis,
     runtime, 
     year,

}) => {
    const poster = IMAGE_SOURCE + posterPath;
    const navigate = useNavigate();

    const getGenre = (genreId: number): string => {
        const genre = genresData.genres.find((genre: { id: number }) => genre.id === genreId);
        return genre ? genre.name : "";
    };

    const navigateMovies = (id:number, movieName:string) => {
                navigate(`${ROUTES.SHOW}${id}`, {state: {name: movieName , poster_path: poster, vote_average: voteAverage, genre_ids: genreId, runtime: runtime, overview: sinopsis, release_date: year}});
            }
            return (
                <div className="movie-card" role="button" tabIndex={0} onClick={() => navigateMovies(movieId, title)}>
                    <img className="movie-poster" src={poster} alt='poster' />
                    <div className="movie-overlay" />
                    <div className="movie-info">
                        <Pill genre={getGenre(genreId)} colorPill='yellow' />
                        <h2 className="text-lg font-bold">{title}</h2>
                        <p className="text-xs"><span className="rating"> <FaStar className="mr-1" /> {voteAverage} /10</span></p>
                    </div>
                </div>
            );
        };

        export default MovieCard;