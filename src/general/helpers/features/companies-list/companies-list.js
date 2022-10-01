module.exports = class CompaniesListHelper {
    constructor(responseKeysGetter, urlBuilder) {
        this.responseKeysGetter = responseKeysGetter,
        this.urlBuilder = urlBuilder
    }

    buildList(companies) {
        let list = []
        companies.map((element) => {
            list.push({
                name: element[this.responseKeysGetter.getNameKey()],
                country: element[this.responseKeysGetter.getOriginCountryKey()],
                logoImage: this.urlBuilder.buildImageUrl(element[this.responseKeysGetter.getLogoPathKey()])
            })
        })
        return list
    }
}