let mysql = require("mysql2")
let connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "TomasTurbo",
        database: "Codenotch"
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

// BORRAR TABLAS

// let sql = 'DROP TABLE tabla_borrar'
// connection.query(sql, function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("tabla borrada");
//         console.log(res);
//     }
// })

// AGREGAR UNA COLUMNA A LA TABLA ALUMNO

// let sql = 'ALTER TABLE alumno ADD edad INT(2)'
// connection.query(sql, function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Columna agregada");
//         console.log(res);
//     }
// })

// ELIMINAR UNA COLUMNA A LA TABLA ALUMNO

// let sql = 'ALTER TABLE alumno DROP COLUMN edad '
// connection.query(sql, function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Columna eliminada");
//         console.log(res);
//     }
// })