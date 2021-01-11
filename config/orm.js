// Import MySQL connection.
const connection = require('./connection.js');

const orm = {
    selectAll(tableInput,burgerCallback){
        const queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            burgerCallback(result);
        });
    }
    // insertOne()
    // updateOne()

};

module.exports = orm;