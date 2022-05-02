const { Client } = require('pg');

const client = new Client({
    user: "postgres",
    host: "43.204.46.223",
    database: "hrms",
    password: "nicePassword",
    port: 5432,
});
client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

client.query(`\dt+`)
    //client.end();
    //console.log("Connection Terminated.");