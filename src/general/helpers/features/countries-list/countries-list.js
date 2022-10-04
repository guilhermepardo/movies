module.exports = class CompaniesListHelper {
    constructor(responseKeysGetter) {
        this.responseKeysGetter = responseKeysGetter
    }
    buildList(countries) {
        let list = []
        countries.map((element) => {
            list.push({
                name: element[this.responseKeysGetter.getNameKey()],
                code: element[this.responseKeysGetter.getIsoKey()]
            })
        })
        return list
    }
}