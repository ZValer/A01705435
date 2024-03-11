const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'tienda_online',
    password: '',
});
module.exports = pool.promise();