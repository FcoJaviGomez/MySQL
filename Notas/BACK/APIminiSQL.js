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

app.get('/mark', (request, response) => {

    let sql;
    if (request.query.id == null) {
        sql = "SELECT * FROM mark";
    }
    else
        sql = "SELECT * FROM mark WHERE id_student=" + request.query.id;
    console.log(request.query.id)

    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result);
        }
    })
})

app.get('/media', (request, response) => {

    let sql;
    if (request.query.id == null) {
        sql = "SELECT * FROM mark";
    }
    else
        sql = "SELECT AVG (mark) AS media FROM mark WHERE id_student=" + request.query.id;
    console.log(request.query.id)

    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result);
        }
    })
})

app.get('/apuntadas', (request, response) => {

    let sql;
    if (request.query.id == null) {
        sql = "SELECT first_name1, last_name1, title FROM student AS s INNER JOIN grupo AS g ON (s.id_group = g.id_group) INNER JOIN subject_teacher AS st ON (st.id_group = g.id_group) INNER JOIN subject AS sb ON (sb.id_subject = st.id_subject) ORDER BY first_name1 ASC";
    }
    else
        sql = "SELECT  id_student,title FROM mark AS m INNER JOIN subject AS s ON (m.id_subject = s.id_subject) WHERE id_student=" + request.query.id;
    console.log(request.query.id)

    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result);
        }
    })
})

app.get('/impartidas', (request, response) => {

    let sql;
    if (request.query.id == null) {
        sql = "SELECT first_name, last_name, title FROM teacher AS s INNER JOIN subject_teacher AS m ON (s.id_teacher = m.id_teacher) INNER JOIN subject AS r ON (r.id_subject = m.id_subject) ORDER BY first_name ASC";
    }
    else
        sql = "SELECT id_teacher, title FROM subject AS s INNER JOIN subject_teacher AS st ON (s.id_subject = st.id_subject) WHERE id_teacher=" + request.query.id;
    console.log(request.query.id)

    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result);
        }
    })
})


app.post('/mark', (request, response) => {
    {
        console.log(request.body);

        let sql = "INSERT INTO mark (id_student, id_subject, data, mark) " +
            "VALUES ('" + request.body.id_student + "', '" +
            request.body.id_subject + "', '" +
            request.body.data1 + "', '" +
            request.body.mark + "')";
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

app.put('/mark', (request, response) => {
    let sql;
    console.log(request.body);
    sql = `UPDATE mark SET id_student = ${request.body.id_student} ,id_subject = ${request.body.id_subject} ,data = "${request.body.data1}" ,mark = ${request.body.mark} WHERE id_mark = ${request.body.id_mark} `
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

app.delete("/mark", (request, response) => {
    console.log(request.body);
    let sql = `DELETE FROM mark WHERE id_mark = ${request.body.id_mark}`
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