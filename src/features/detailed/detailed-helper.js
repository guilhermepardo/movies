module.exports = class DetailedHelper {
    constructor(genreHelper, tmdbUrls, apiKey) {
        this.genreHelper = genreHelper,
        this.tmdbUrls = tmdbUrls,
        this.apiKey = apiKey
    }

    genreConversor(genres) {
        return this.genreHelper(genres)
    }

    getTmdbFeatureUrlComposed(feature) {
        return `${this.tmdbUrls[feature]}?api_key=${this.apiKey}`
    }

    getTmdbDetailsUrlComposed(id) {
        return `${this.tmdbUrls['DETAILS']}/${id}?api_key=${this.apiKey}`
    }

    getTmdbImageUrlComposed(image) {
        return `${this.tmdbUrls['IMAGES']}${image}`
    }

    getSpokenLanguageList(list){
        let languagesList = []
        list.map(language => {languagesList.push(language.name)})
        return languagesList
    }

    getCompaniesList(list){
        let companiesList = []
        list.map(company => {companiesList.push({ name: company.name, country: company.origin_country})})
        return companiesList
    }

    getCountriesList(list){
        let countriesList = []
        list.map(country => {countriesList.push(country.name)})
        return countriesList
    }

}