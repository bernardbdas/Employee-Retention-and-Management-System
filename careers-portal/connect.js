const { Client } = require('pg');

const creds = {
    host: "43.204.46.223",
    database: "hrms",
    port: "5432",
    user: "postgres",
    password: "nicePassword"
};

const cl = new Client(creds);

cl.connect();
cl.query(
    `INSERT INTO admin_users (email, password) VALUES ('johndoe@mail.com',crypt('johnspassword', gen_salt('bf')));
    SELECT * FROM admin_users;`, (err, res) => {
        if (!err)
            console.log(res.rows);
        else
            console.log(err.message);
    });

cl.query(
    `SELECT * FROM admin_users;`, (err, res) => {
        if (!err)
            console.log(res.rows);
        else
            console.log(err.message);

        cl.end();
    });

// cl.query(`\
//dt + `, (err, res) => {
//     if (!err)
//         console.log(res.rows);
//     else
//         console.log(err.message);

//     cl.end;
// });