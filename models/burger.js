const orm = require('../config/orm.js');

const burger = {
    selectAll(burgerCallback) {
        orm.selectAll("burgers", (res) => burgerCallback(res));
    },
    insertOne(cols, vals, burgerCallback) {
        orm.insertOne("burgers", cols, vals, (res) => burgerCallback(res));
    },
    //devour
};

module.exports = burger;