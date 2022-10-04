module.exports = class UrlBuilderHelper {
    constructor(featuresGetter, urlsGetters) {
        this.featuresGetter = featuresGetter,
        this.urlsGetters = urlsGetters
    }
    buildFeatureUrl(feature) {
        return this.urlsGetters.getBaseUrl() +
        this.urlsGetters.getFeatureUrl(this.featuresGetter.getFeatureName(feature)) +
        this.urlsGetters.getApiKeyQueryString() +
        this.urlsGetters.getApiKeyValue()
    }

    buildGetByIdUrl(id) {
        return this.urlsGetters.getBaseUrl() +
        this.urlsGetters.getFeatureUrl(this.featuresGetter.getDetailsKey()) +
        `/${id}` +
        this.urlsGetters.getApiKeyQueryString() +
        this.urlsGetters.getApiKeyValue()
    }

    buildImageUrl(path) {
        return this.urlsGetters.getImagesUrl() + path
    }
}