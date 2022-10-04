module.exports = class SpokenLanguagesListHelper {
    constructor(responseKeysGetter) {
        this.responseKeysGetter = responseKeysGetter
    }

    buildList(languages) {
        let list = []
        languages.map((element) => {
            list.push({
                name: element[this.responseKeysGetter.getNameKey()],
                englishName: element[this.responseKeysGetter.getEnglishNameKey()]
            })
        })
        return list
    }
}