const mysql = require('mysql');
const {MYSQL_CONFIG} = require('../config/db');

const connection = mysql.createConnection(MYSQL_CONFIG);

//create connnection
connection.connect();

//run query 
function exec(sql){
    const dataPromise = new Promise((resolve, reject)=> {
        connection.query(sql, (err, result)=> {
            console.log(sql)
            if(err) reject(err);
            resolve(result);
        })
    })
    return dataPromise;
}


module.exports = {
    exec
}