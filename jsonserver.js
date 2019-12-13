module.exports = function () {
    var faker = require("faker");
    var lodash = require("lodash");
    return {
        people: lodash.times(100, function (n) {
            return {
                id: n,
                name: faker.name.title(),
                avatar: faker.image.fashion()
            }
        })
    }

}