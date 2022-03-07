const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;
let mysql = require("mysql2")

let connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "TomasTurbo",
        database: "clase"
    }
);

connection.connect(function (error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log('Conexion correcta');
    }
});

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/student', (request, response) => {

    let sql;
    if (request.query.id == null) {
        sql = "SELECT * FROM student";
    }
    else
        sql = "SELECT * FROM student WHERE id_student=" + request.query.id;
    console.log(request.query.id)

    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result);
        }
    })
})

app.post('/student', (request, response) => {
    {
        console.log(request.body);

        let sql = "INSERT INTO student (first_name1, last_name1, id_group, entry) " +
            "VALUES ('" + request.body.first_name1 + "', '" +
            request.body.last_name1 + "', '" +
            request.body.id_group + "', '" +
            request.body.entry + "')";
        console.log(sql);
        connection.query(sql, function (err, result) {
            if (err)
                console.log(err);
            else {
                console.log(result);
                if (result.insertId) {
                    console.log(result.insertId);
                    response.send(String(result.insertId));
                }
                else
                    response.send("-1");
            }
        })
    }
})

app.put('/student', (request, response) => {
    let sql;
    console.log(request.body);
    sql = `UPDATE student SET first_name1 = "${request.body.first_name1}" ,last_name1 = "${request.body.last_name1}" ,id_group = ${request.body.id_group} ,entry = "${request.body.entry}" WHERE id_student = ${request.body.id_student} `
    console.log(sql);
    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            console.log(result);
            if (result.insertId)
                response.send(String(result.insertId));
            else
                response.send("-1");
        }
    })

})

app.delete("/student", (request, response) => {
    console.log(request.body);
    let sql = `DELETE FROM student WHERE id_student = ${request.body.id_student}`
    console.log(sql);
    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            // console.log(result)
            response.send(result);
        }
    })
})

app.listen(PORT, "localhost", () => {
    console.log("Server is listen on port " + PORT + " on localhost EXPRESS");
})