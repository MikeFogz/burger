const orm = require('../config/orm');

const burger = {
    //select all
    selectAll(burgerCallback) {
        orm.selectAll("burgers", (res) => burgerCallback(res));
    },
    //add new burger
    insertOne(cols, vals, burgerCallback) {
        orm.insertOne("burgers", cols, vals, (res) => burgerCallback(res));
    },
    //devour a burger
    updateOne(objColVals, condition, burgerCallback) {
        orm.updateOne("burgers", objColVals, condition, (res) => burgerCallback(res));
    },
};

module.exports = burger;