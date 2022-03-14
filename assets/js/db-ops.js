const express = require('express');
const filesave = require('fs');
var app = express();

//to show the records in json format
//function showJSON() {
app.get("/showJSON", (req, res) => {
    connection.query("SELECT * from BLOSSOMS", (err, rows, fields) => {
        if (!err) {
            res.send(rows)
                //data = res.send(rows)
                //var jsonData = JSON.stringify(data);
                //filesave.writeFile("participants.json", jsonData);
        } else
            console.log("ERROR! : [check the query and try again!]");
    })
})


//(ii) to add a record
//function addRecord() {
app.get('/add', (_req, res) => {
    var post = {
        S_RegNo: ,
        S_Name: ,
        S_Class: ,
        S_Event: ,
        S_Team:
    };
    var sql = 'INSERT INTO BLOSSOMS SET ?';
    var query = connection.query(sql, post, (err, result) => {
        if (err) throw err;
        res.send("ADDED A RECORD TO THE DATABASE!");
    })
});

//(ii) to delete a record
//function delRecord() {
app.get('/delete/:id', (req, res) => {
    var sql = `DELETE FROM BLOSSOMS WHERE S_RegNo= '${req.params.id}'`;
    var query = connection.query(sql, (err, result) => {
        if (err) throw error;
        res.send("SUCCESSFULLY DELETED A RECORD!");
    })
});


//(iii) to update a record
//function updRecord()
app.get('/update/:event', (req, res) => {
    var newEv = 'Singing';
    var sql = `UPDATE BLOSSOMS SET S_Event='${newEv}' WHERE S_Event= '${req.params.event}'`;
    var query = connection.query(sql, (err, result) => {
        if (err) throw error;
        res.send("SUCCESSFULLY UPDATED A RECORD!");
    })
});

//(iv)
//function searchbyEv() {
app.get('/searchbyev/:event', (req, res) => {
    connection.query(`SELECT * FROM BLOSSOMS WHERE S_Event=''${req.params.event}''`, (err, rows, fields) => {
        if (!err) {
            res.write('<table cellpadding="2" cellspacing="2" borders="1"><tr>');
            for (var column in rows[0]) {
                res.write('<th>' + column + '</th>');
            }
            res.write('</tr>');
            for (var row in rows) {
                res.write('<tr>');
                for (var column in rows[row])
                    res.write('<td>' + rows[row][column] + '</td>');
                res.write('</tr>');
            }
            res.end("</table>");
        } else
            console.log("ERROR! [in search by event]");
    })
});


//(v)
//function searchbyTeam() {
app.get('/searchbyteam/:team', (req, res) => {
    connection.query(`SELECT * FROM BLOSSOMS WHERE S_Team= '${req.params.team}'`, (err, rows, fields) => {
        if (!err) {
            res.write('<table cellpadding="2" cellspacing="2" borders="1"><tr>');
            for (var column in rows[0]) {
                res.write('<th>' + column + '</th>');
            }
            res.write('</tr>');
            for (var row in rows) {
                res.write('<tr>');
                for (var column in rows[row])
                    res.write('<td>' + rows[row][column] + '</td>');
                res.write('</tr>');
            }
            res.end("</table>");
        } else
            console.log("ERROR! [in search by team]");
    })
});

//to show in table format
app.get('/showTable', (req, res) => {
    connection.query(`SELECT * FROM BLOSSOMS`, (err, rows, fields) => {
        if (!err) {
            res.write('<table cellpadding="2" cellspacing="2" borders="1"><tr>');
            for (var column in rows[0]) {
                res.write('<th>' + column + '</th>');
            }
            res.write('</tr>');
            for (var row in rows) {
                res.write('<tr>');
                for (var column in rows[row])
                    res.write('<td>' + rows[row][column] + '</td>');
                res.write('</tr>');
            }
            res.end("</table>");
        } else
            console.log("ERROR!");
    })
});