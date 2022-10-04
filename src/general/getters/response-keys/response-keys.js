module.exports = class ResponseKeysGetters {
    constructor(responseKeys) {
        this.responseKeys = responseKeys
    }
    getTitleKey() { return this.responseKeys.TITLE_KEY }
    getOriginalTitleKey() { return this.responseKeys.ORIGINAL_TITLE_KEY }
    getOverviewKey() { return this.responseKeys.OVERVIEW_KEY }
    getPosterPathKey() { return this.responseKeys.POSTER_PATH_KEY }
    getGenresKey() { return this.responseKeys.GENRES_KEY }
    getRuntimeKey() { return this.responseKeys.RUNTIME_KEY }
    getReleaseDateKey() { return this.responseKeys.RELEASE_DATE_KEY }
    getStatusKey() { return this.responseKeys.STATUS_KEY }
    getOriginalLanguageKey() { return this.responseKeys.ORIGINAL_LANGUAGE_KEY }
    getSpokenLanguagesKey() { return this.responseKeys.SPOKEN_LANGUAGES_KEY }
    getAdultKey() { return this.responseKeys.ADULT_KEY }
    getVoteAverageKey() { return this.responseKeys.VOTE_AVERAGE_KEY }
    getPopularityKey() { return this.responseKeys.POPULARITY_KEY }
    getBudgetKey() { return this.responseKeys.BUDGET_KEY }
    getRevenueKey() { return this.responseKeys.REVENUE_KEY }
    getProductionCompaniesKey() { return this.responseKeys.PRODUCTION_COMPANIES_KEY }
    getProductionCountriesKey() { return this.responseKeys.PRODUCTION_COUNTRIES_KEY }
    getNameKey() { return this.responseKeys.NAME_KEY }
    getOriginCountryKey() { return this.responseKeys.ORIGIN_COUNTRY_KEY }
    getEnglishNameKey() { return this.responseKeys.ENGLISH_NAME_KEY }
    getLogoPathKey() { return this.responseKeys.LOGO_PATH_KEY }
    getIsoKey() { return this.responseKeys.ISO_3166_1_KEY }
}