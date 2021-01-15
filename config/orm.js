// Import MySQL connection.
const connection = require('./connection.js');
const objToSql = (ob) => {
    const arr = [];
    for (const key in ob) {
    let value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = `'${value}'`;
        }
        arr.push(`${key}=${value}`);
    }
    }
    return arr.toString();
};

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
    let queryString = `INSERT INTO ${table} (burger_name) VALUES  ("${vals}")`;

    console.log(queryString);

    connection.query(queryString, (err, result) => {
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