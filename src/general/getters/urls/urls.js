module.exports = class UrlsGetter {
    constructor(tmdbUrls) {
        this.tmdbUrls = tmdbUrls
    }
    getBaseUrl() { return this.tmdbUrls.BASE_URL }
    getApiKeyQueryString() { return this.tmdbUrls.API_KEY_QUERY_STRING }
    getApiKeyValue() { return this.tmdbUrls.API_KEY_VALUE }
    getImagesUrl() { return this.tmdbUrls.IMAGES_ROUTE }
    getFeatureUrl(feature) { return this.tmdbUrls[feature + '_ROUTE'] }
}