import httpInstance from "../httpInstance";

export const getTopRatedMovies = async () => {
    let res: any;
    const endpoint = `top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
    await httpInstance
        .get(endpoint)
        .then((response) => {
            res = response;
        })
        .catch((err) => {
            res = err.message;
        })
    return res;
};