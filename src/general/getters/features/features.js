module.exports = class FeaturesGetters {
    constructor(features) {
        this.features = features
    }
    getPopularKey() { return this.features.POPULAR }
    getTrendingKey() { return this.features.TRENDING }
    getTheatresKey() { return this.features.THEATRES }
    getTheatresUpcomingKey() { return this.features.THEATRES_UPCOMING }
    getDetailsKey() { return this.features.DETAILS }
    
    getFeatureName(feature) {
        return this.features[String(feature).toUpperCase()]
    }

}