const mysql= require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bento',
    port: 3306,
});
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected successfully');
});

module.exports = connection;