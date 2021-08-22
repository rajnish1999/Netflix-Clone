
const requests = {
    fetchTrending: `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY_TMDB}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}&with_genres=10749`,
    fetchDocumentMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}&with_genres=99`,
}

export default requests;