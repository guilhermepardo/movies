module.exports = class DetailedService {
    constructor(
        httpHandler,
        helper
    ) {
        this.httpHandler = httpHandler,
        this.helper = helper
    }

    async detailed(feature) {
        try {
            let list = []
            const response = await this.httpHandler.get(this.helper.getTmdbFeatureUrlComposed(feature.toUpperCase()))
            for (const movie of response.results) {
                const details = await this.httpHandler.get(`${this.helper.getTmdbDetailsUrlComposed(movie.id)}`)
                list.push({
                    title: details.title,
                    originalTitle: details.original_title,
                    sinopsis: details.overview,
                    posterImage: this.helper.getTmdbImageUrlComposed(details.poster_path),
                    genres: this.helper.genreConversor(details.genres),
                    duration: details.runtime,
                    release: details.release_date,
                    released: details.status === 'Released' ? true : false,
                    language: details.original_language,
                    spokenLanguages: this.helper.getSpokenLanguageList(details.spoken_languages),
                    adult: details.adult,
                    rating: details.vote_average,
                    popularity: details.popularity,
                    budget: details.budget,
                    gross: details.revenue,
                    companies: this.helper.getCompaniesList(details.production_companies),
                    productionCountries: this.helper.getCountriesList(details.production_countries)
                })
                list.push(details)
            }

            return list
        } catch (error) {
            throw error
        }
    }

}