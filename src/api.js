
const api_key = "7623cf4b067b9da7ce31fe2b1772d18b";

const categorias = [
    {
        name:"trending",
        title: "Em alta",
        path: `/trending/all/week?api_key=${api_key}&language=pt-BR`,
        isLager: true,
    },
    {
        name:"netflixOriginals",
        title: "Originais Netflix",
        path: `/discover/tv?api_key=${api_key}&with_networks=213`,
        isLager: false,
    },
    {
        name:"topRated",
        title: "Populares",
        path: `/movie/top_rated?api_key=${api_key}&language=pt-BR`,
        isLager: false,
    },
    {
        name:"comedy",
        title: "Comédias",
        path: `/discover/tv?api_key=${api_key}&with_genres=35`,
        isLager: false,
    },
    {
        name:"romances",
        title: "Romances",
        path: `/discover/tv?api_key=${api_key}&with_genres=10749`,
        isLager: false,
    },
    {
        name:"documentaries",
        title: "Documentários",
        path: `/discover/tv?api_key=${api_key}&with_genres=99`,
        isLager: false,
    },

];


export const getMovies = async (path) =>{

    try {
        let url = `https://api.themoviedb.org/3${path}`;
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log("error getMovies: ", error)
    }
}


export default categorias;
