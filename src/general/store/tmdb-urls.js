module.exports = {
    BASE_URL: 'https://api.themoviedb.org/3',
    POPULAR_ROUTE: '/movie/popular',
    TRENDING_ROUTE: '/trending/movie/day',
    THEATRES_ROUTE: '/movie/now_playing',
    THEATRES_UPCOMING_ROUTE: '/movie/upcoming',
    DETAILS_ROUTE: '/movie',
    IMAGES_ROUTE: 'https://image.tmdb.org/t/p/original',
    API_KEY_QUERY_STRING: '?api_key=',
    API_KEY_VALUE: process.env.TMDB_V3_KEY
}