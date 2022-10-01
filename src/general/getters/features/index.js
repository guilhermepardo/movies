const features = require('../../store/features')
const FeaturesGetters = require('./features')

const featuresGetters = new FeaturesGetters(features)

module.exports = featuresGetters