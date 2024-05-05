import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { Pill } from "../../components/Pill";
import { getMovieDetails } from "../../services";
import RecommendationsCarousel from "../../components/RecommendationsCarousel/RecommendationsCarousel";
import genresData from "../../constants/genres.json";

const Show: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const goBack = () => navigate(-1);
  const [movie, setMovie] = useState<any>({});
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    if (!id) {
      goBack();
    }
  }, [id, goBack]);

  useEffect(() => {
    const fetchMovieDetails = async (id: string) => {
      try {
        const response = await getMovieDetails(id);
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    fetchMovieDetails(id!);
  }, [id]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
      setIsFavorite((JSON.parse(storedFavorites) || []).includes(id));
    }
  }, [id]);

const addFavorite = () => {
    const updatedFavorites = [...favorites, id!];
    localStorage.setItem("Favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
    setIsFavorite(true);
};

const removeFavorite = () => {
    const updatedFavorites = favorites.filter((fav) => fav !== id);
    localStorage.setItem("Favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
    setIsFavorite(false);
};

    return (
        <div className="m-3">
            <div className="flex font-sans">
                <div className="m-2 ">
                    {movie.backdrop_path && <img className="rounded-md w-60 h-100" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='poster' />}
                </div>
                <div className="m-2">
                    <div>
                    <h2 className="text-5xl font-bold">{movie.title}</h2>
                    <div className="flex flex-row pt-6 justify-between">
                        <p>User Score: {movie.vote_average}</p>
                        <p>Genres: {movie.genres && movie.genres.map((genre: any) => <Pill key={genre.id} genre={genre.name} colorPill='red' />)}</p>
                        <p>Release Date: {movie.release_date}</p>
                        <p>Runtime: {movie.runtime} minutes</p>
                        <p>Cost of Movie: $ {movie.budget} </p>
                    </div>
                    <p className="pt-6">Overview: {movie.overview}</p>
                    </div>
                    <div className="mt-10 flex flex-row justify-around">
                        <button className="p-1 bg-red-500 rounded-md text-white font-medium leading-none hover:bg-black hover:text-white" onClick={goBack}>Back</button>
                        {isFavorite
                            ? <button className="p-1 bg-red-500 text-white font-medium leading-none rounded-md hover:bg-black hover:text-white" onClick={() => removeFavorite() }>Remove from Favorites</button>
                            : <button className="p-1 bg-blue-400 text-white font-medium leading-none rounded-md hover:bg-black hover:text-white" onClick={() => addFavorite()}>Add to Favorites</button>
                        }
                    </div>

                </div>
                    
            </div>
                    
            
            <div>
                <h1 className="text-5xl font-bold">Recommendations: </h1>
                {id && <RecommendationsCarousel id={id} />}
            </div>
        </div>
    );
}

export default Show;
