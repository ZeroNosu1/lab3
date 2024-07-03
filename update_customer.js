const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function(err) {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log("Connected to MySQL database!");

    const sql = "UPDATE customers SET address = 'Canyon 123' WHERE name = 'Jason'";

    con.query(sql, function (err, result) {
        if (err) {
            console.error('Error updating record:', err);
            return;
        }
        
        console.log(result.affectedRows + " record(s) updated");
    });
});