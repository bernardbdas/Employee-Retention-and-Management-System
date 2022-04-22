const { Client } = require('pg')
    //psql --host=hrms-db.c1mpcwlijwa0.ap-south-1.rds.amazonaws.com --port=5432 --username=adminUser --password --dbname=hrms
const client = new Client({
    host: "43.204.46.223",
    user: "postgres",
    port: 5432,
    password: "nicePassword",
    database: "hrms"
})
client.connect();
client.query(`SELECT * FROM job-listings`, (err, res) => {
    if (!err) {
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end;
})