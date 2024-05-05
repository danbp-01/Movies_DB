export interface IMovie {
    title: string;
    genreId: number;
    movieId: number;
    voteAverage: number;
    posterPath: string;

}

export interface IMovieCarousel {
    movies: IMovie[];
}
