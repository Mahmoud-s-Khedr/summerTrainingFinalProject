const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'finalUser',
    database: 'finalProject'
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('database connected');
    }
});



module.exports = db