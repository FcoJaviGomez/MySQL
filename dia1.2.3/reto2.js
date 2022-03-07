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

// SETEAR LAS NOTAS A 0

// let sql = 'UPDATE mark SET mark=0';
// connection.query(sql, function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("seteo de notas a 0");
//         console.log(res);
//     }
// })


// OBTENER NOMBRE Y APELLIDO ESTUDIANTES

// let sql = 'SELECT first_name, last_name FROM clase.student';
// connection.query(sql, function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("datos nombre y apellidos estudiantes");
//         console.log(res);
//     }
// })


// TODOS LOS DATOS DE LOS PROFESORES

let sql = 'SELECT * FROM clase.student';
connection.query(sql, function (err, res) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("datos profesores");
        console.log(res);
    }
})


// RETO 3      RETO 3        RETO 3

// ELIMINAR NOTAS CON ANTIGUEDAD DE 10 AÑOS

// let sql = 'DELETE FROM mark WHERE data<"2012-01-01"';
// connection.query(sql, function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("nota eliminada");
//         console.log(res);
//     }
// })


//AZTUALIZAR NOTAS A 5

// let sql = 'UPDATE mark SET mark=5 WHERE mark < 5';
// connection.query(sql, function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Todos aprobados");
//         console.log(res);
//     }
// })


//  DIAAAAAAAAAAAAAAAAAAAAAA 2        DIAAAAAAAAAAAAAAAAAAAAA 2

// RETO 1               RETO 1              RETO 1                    RETO 1

// NOTA MEDIA DE UNA ASIGNATURA

// let sql = 'SELECT AVG (mark) FROM mark WHERE id_subject=1'
// connection.query(sql, function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Nota media calculada");
//         console.log(res);
//     }
// })


// NUMERO TOTAL DE ALUMNOS

// let sql = 'SELECT COUNT(*) AS alumnos_totales FROM student'
// connection.query(sql, function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Total de alumnos");
//         console.log(res);
//     }
// })

// LISTAR TABLA 'GROUP'

// let sql = 'SELECT * FROM clase.group'
// connection.query(sql, function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Lista group");
//         console.log(res);
//     }
// })

// ELIMINAR NOTAS QUE ESTEN POR ENCIMA DE 5 Y QUE SEAN DEL AÑO PASADO

// let sql = 'DELETE FROM mark WHERE mark>5 AND data>"2021-01-01" AND data<"2021-12-31"'
// connection.query(sql, function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Nota eliminada");
//         console.log(res);
//     }
// })

// AÑADIR UNA COLUMNA

// let sql = 'ALTER TABLE student ADD AñoDeIngreso DATE'
// connection.query(sql, function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Columna añadida");
//         console.log(res);
//     }
// })

// DATO DE STUDIANTES POR AÑO DE INGRESO

// let sql = 'SELECT * FROM student WHERE AñoDeIngreso BETWEEN "2021-01-01" AND "2021-12-31"'
// connection.query(sql, function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Columna añadida");
//         console.log(res);
//     }
// })

// AÑADIR CAMPOS A LA TABLA SUBJECT_TEACHER

// let sql = 'INSERT INTO subjet_teacher (id_subjet, id_teacher,id_group) VALUES (4,2,2)'
// connection.query(sql, function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Campo añadido");
//         console.log(res);
//     }
// })

// Calcular el numero de profesores que hay por cada asignatura

// let sql = 'SELECT id_subjet, COUNT(*) AS numTeacher_subjet FROM subjet_teacher GROUP BY id_subjet'
// connection.query(sql, function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Profesores por asignatura");
//         console.log(res);
//     }
// })

// RETO 2              RETO 2              RETO 2             RETO 2


// OBTENER EL ID Y LA NOTA DE LOS ALUMNOS

// let sql = 'SELECT id_mark, mark FROM mark WHERE (id_mark BETWEEN 1 AND 4) OR (data BETWEEN "2021-01-01" AND "2021-12-31" AND mark>8) '
// connection.query(sql, function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("ID Y NOTAS");
//         console.log(res);
//     }
// })


// OBTENER LA MEDIA DE LAS NOTAS EN EL ULTIMO AÑO POR ASIGNATURA

// let sql = 'SELECT AVG (mark) AS media FROM mark WHERE data BETWEEN "2021-01-01" AND "2021-12-31" GROUP BY id_subject'
// connection.query(sql, function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Nota media");
//         console.log(res);
//     }
// })

// OBTENER LA MEDIA DE LAS NOTAS EN EL ULTIMO AÑO POR ALUMNO

// let sql = 'SELECT AVG (mark) AS media FROM mark WHERE data BETWEEN "2021-01-01" AND "2021-12-31" GROUP BY id_student'
// connection.query(sql, function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Nota media");
//         console.log(res);
//     }
// })


//  dia 3      dia 3          dia 3         dia 3         dia 3
//  dia 3      dia 3          dia 3         dia 3         dia 3
//  dia 3      dia 3          dia 3         dia 3         dia 3

// reto1        reto 1          reto 1           reto1

// let sql = 'SELECT first_name, last_name, title FROM student AS s INNER JOIN grupo AS g ON (s.id_group = g.id_group) INNER JOIN subject_teacher AS t ON (t.id_group = g.id_group) INNER JOIN subject AS b ON (b.id_subject = t.id_subject)'

// connection.query(sql, function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Nombre, Apellido, Asignatura");
//         console.log(res);
//     }
// })

// reto 2        reto 2       reto 2          reto2

// let sql = 'SELECT first_name, last_name, title FROM teacher AS s INNER JOIN subject_teacher AS m ON (s.id_teacher = m.id_teacher) INNER JOIN subject AS r ON (r.id_subject = m.id_subject) ORDER BY first_name ASC'

// connection.query(sql, function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Nombre, Apellido, Asignatura");
//         console.log(res);
//     }
// })

// reto 3        reto 3       reto 3          reto3

// let sql = 'SELECT COUNT(*) AS num, title, first_name, last_name FROM subject AS s INNER JOIN subject_teacher AS st ON (s.id_subject = st.id_subject) INNER JOIN teacher AS t ON (t.id_teacher=st.id_teacher)  INNER JOIN grupo AS g ON (g.id_group = st.id_group) INNER JOIN student AS stu ON (stu.id_group = g.id_group) GROUP BY title'
// connection.query(sql, function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Nombre, Apellido, Asignatura");
//         console.log(res);
//     }
// })