const mysql = require('mysql2');
const parser = require('body-parser');
const creds = {
    host: "",
    user: "",
    password: "",
    database: ""
}
app.use(parser.json());
var connection = mysql.createConnection(creds);
connection.connect((err) => {
    if (!err)
        console.log("DATABASE CONNECTED SUCCESSFULLY!");
    else
        console.log("CONNECTION ERROR! [check the credentials and try again...]");
})

//to start the server
//function startServ() {
app.listen(5200, () => console.log('SERVER HAS BEEN STARTED!'));