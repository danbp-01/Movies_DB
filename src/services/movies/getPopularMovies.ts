import httpInstance from "../httpInstance";

export const getPopularMovies = async () => {
    let res: any;
    const endpoint = `popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
    await httpInstance
        .get(endpoint)
        .then((response) => {
            res = response;
            console.log(response)
        })
        .catch((err) => {
            res = err.message;
        })
    return res;
}