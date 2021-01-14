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
    },

    insertOne(table, vals, burgerCallback) {
    let queryString = `INSERT INTO ${table} (burger_name) VALUES (?)`;

    console.log(queryString);

    connection.query(queryString, vals, (err, result) => {
    if (err) {
        throw err;
    }
    burgerCallback(result);
    });
},

    updateOne(table, objColVals, condition, burgerCallback) {
        let queryString = `UPDATE ${table}`;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
        console.log(queryString);
    
        connection.query(queryString, (err, result) => {
        if (err) {
            throw err;
        }
    
        burgerCallback(result);
        });
    },


};

module.exports = orm;