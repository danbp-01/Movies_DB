export interface IRecommendations {
    title: string;
    genreId: number;
    movieId: number;
    voteAverage: number;
    posterPath: string;

}

export interface IRecommendationsCarousel {
    Recommendations: IRecommendations[];
}
