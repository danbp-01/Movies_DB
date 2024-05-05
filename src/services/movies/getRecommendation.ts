import httpInstance from "../httpInstance";

export const getRecomendation = async (id: string) => {
    let res: any;
    const endpoint = `${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
    await httpInstance
        .get(endpoint)
        .then((response) => {
            res = response;
        })
        .catch((err) => {
            res = err.message;
        })
    return res;
}

