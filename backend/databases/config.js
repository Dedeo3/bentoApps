const mysql= require('mysql')
require('dotenv').config();
const connection = mysql.createConnection({
    host: `${process.env.HOST}`,
    user: `${process.env.USER}`,
    password: '',
    database: `${process.env.DATABASE}`,
    port: process.env.PORT_DB,
});
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected successfully');
});

module.exports = connection;