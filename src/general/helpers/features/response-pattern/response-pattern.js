module.exports = class ResponsePatternHelper {
    constructor(
        responseKeysGetter,
        urlBuilder,
        genresHelper,
        companiesList,
        countriesList,
        spokenLanguagesList
    ) {
        this.responseKeysGetter = responseKeysGetter,
            this.urlBuilder = urlBuilder,
            this.genresHelper = genresHelper,
            this.companiesList = companiesList,
            this.countriesList = countriesList,
            this.spokenLanguagesList = spokenLanguagesList
    }
    buildResponsePattern(element) {
        return {
            title: element.hasOwnProperty(this.responseKeysGetter.getTitleKey()) ?
                element[this.responseKeysGetter.getTitleKey()] : null,
            originalTitle: element.hasOwnProperty(this.responseKeysGetter.getOriginalTitleKey()) ?
                element[this.responseKeysGetter.getOriginalTitleKey()] : null,
            sinopsis: element.hasOwnProperty(this.responseKeysGetter.getOverviewKey()) ?
                element[this.responseKeysGetter.getOverviewKey()] : null,
            posterImage: element.hasOwnProperty(this.responseKeysGetter.getPosterPathKey()) ?
                this.urlBuilder.buildImageUrl(element[this.responseKeysGetter.getPosterPathKey()]) : null,
            genres: element[this.responseKeysGetter.getGenresKey()[0]] ?
                this.genresHelper.returnGenresList(element[this.responseKeysGetter.getGenresKey()[0]]) :
                this.genresHelper.returnGenresList(element[this.responseKeysGetter.getGenresKey()[1]]),
            release: element.hasOwnProperty(this.responseKeysGetter.getReleaseDateKey()) ?
                element[this.responseKeysGetter.getReleaseDateKey()] : null,
            language: element.hasOwnProperty(this.responseKeysGetter.getOriginalLanguageKey()) ?
                element[this.responseKeysGetter.getOriginalLanguageKey()] : null,
            adult: element.hasOwnProperty(this.responseKeysGetter.getAdultKey()) ?
                element[this.responseKeysGetter.getAdultKey()] : null,
            rating: element.hasOwnProperty(this.responseKeysGetter.getVoteAverageKey()) ?
                element[this.responseKeysGetter.getVoteAverageKey()] : null,
            popularity: element.hasOwnProperty(this.responseKeysGetter.getPopularityKey()) ?
                element[this.responseKeysGetter.getPopularityKey()] : null,
            budget: element.hasOwnProperty(this.responseKeysGetter.getBudgetKey()) ?
                element[this.responseKeysGetter.getBudgetKey()] : null,
            gross: element.hasOwnProperty(this.responseKeysGetter.getRevenueKey()) ?
                element[this.responseKeysGetter.getRevenueKey()] : null,
            spokenLanguages: element.hasOwnProperty(this.responseKeysGetter.getSpokenLanguagesKey()) ?
                this.spokenLanguagesList.buildList(element[this.responseKeysGetter.getSpokenLanguagesKey()]) : null,
            productionCompanies: element.hasOwnProperty(this.responseKeysGetter.getProductionCompaniesKey()) ?
                this.companiesList.buildList(element[this.responseKeysGetter.getProductionCompaniesKey()]) : null,
            productionCountries: element.hasOwnProperty(this.responseKeysGetter.getProductionCountriesKey()) ?
                this.countriesList.buildList(element[this.responseKeysGetter.getProductionCountriesKey()]) : null
        }
    }
}