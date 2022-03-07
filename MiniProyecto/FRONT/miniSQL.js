class Alumno {
    constructor(first_name1, last_name1, id_group, entry, id_student) {
        this.first_name1 = first_name1;
        this.last_name1 = last_name1;
        this.id_group = id_group;
        this.entry = entry;
        this.id_student = id_student
    }
}

function getStudent() {

    let id = document.getElementById("id").value
    let mostrar = document.getElementById("mostrar")
    let url = "http://localhost:3000/student"

    if (id != "") {
        url += `?id=${id}`
        // let url = "http://localhost:3000/student?id=" + id;
    }
    let param =
    {
        headers: { "content-type": "application/json; charset= UTF-8" },
        method: "GET"
    }
    fetch(url, param)
        .then(function (data) {
            console.log(data)
            return data.json()
        })
        .then(function (result) {
            console.log(result)
            if (id != "" && result.length > 0) {
                console.log(result);

                mostrar.innerHTML = `<tr>
                                        <th>Id</th>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Grupo</th>
                                        <th>Fecha de ingreso</th>
                                        </tr>         
                        <tr>
                                <td>${id}</td>
                                <td>${result[0].first_name1}</td>
                                <td>${result[0].last_name1}</td>
                                <td>${result[0].id_group}</td>
                                <td>${result[0].entry.substring(0, 10)}</td>
                              </tr>`

            }
            else if (id === "") {
                mostrar.innerHTML =
                    `<tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Grupo</th>
                                <th>Fecha de ingreso</th>
                                </tr>`
                for (let i = 0; i < result.length; i++) {
                    mostrar.innerHTML +=
                        ` <tr>
                                        <td>${result[i].id_student}</td>
                                        <td>${result[i].first_name1}</td>
                                        <td>${result[i].last_name1}</td>
                                        <td>${result[i].id_group}</td>
                                        <td>${result[i].entry.substring(0, 10)}</td>
                                      </tr>`
                    console.log(mostrar);
                }
            }
            else
                showToast("ERROR: el usuario con id: " + id + " no existe", "bg-danger")
        })
        .catch(function (error) {
            showToast("ERROR: Fallo en la comunicación con el API REST", "bg-danger")
            console.log(error)
        })
}

function postStudent() {

    let alumno = new Alumno(document.getElementById("nombre").value,
        document.getElementById("apellido").value,
        document.getElementById("grupo").value,
        document.getElementById("entry").value)
    // document.getElementById("id").value)

    const url = "http://localhost:3000/student";
    if (validar(alumno)) {
        let param =
        {
            headers: { "Content-type": "application/json; charset= UTF-8" },
            body: JSON.stringify(alumno),
            method: "POST"
        }
        fetch(url, param)
            .then(function (data) {
                return data.json()
            })
            .then(function (result) {
                console.log(result);
                if (result == "-1") {
                    showToast("usuario existente", "bg-danger")
                }
                // else if (){
                //     showToast("Campos sin rellenar", "bg-danger")
                // }
                else {
                    showToast("Usuario Creado Correctamente", "bg-success")
                }

                console.log(result)
            })
            .catch(function (error) {
                showToast("ERROR: Fallo en la comunicacion con el API REST", "bg-danger")
                console.log(error)
            })
    }
}

function putStudent() {
    // let id = document.getElementById("id").value
    let alumno = new Alumno(document.getElementById("nombre").value,
        document.getElementById("apellido").value,
        document.getElementById("grupo").value,
        document.getElementById("entry").value,
        document.getElementById("id").value)
    console.log(alumno);

    const url = "http://localhost:3000/student";
    if (validarId(alumno)) {
        if (validar(alumno)) {
            let param =
            {
                headers: { "Content-type": "application/json; charset= UTF-8" },
                body: JSON.stringify(alumno),
                method: "PUT"
            }
            fetch(url, param)
                .then(function (data) {
                    return data.json()
                })
                .then(function (result) {
                    console.log(result);
                    if (result != "-1") {
                        // showToast("Introduce un id", "bg-danger")
                    }
                    else {
                        showToast("Usuario Actualizado Correctamente", "bg-success")
                    }
                })
                .catch(function (error) {
                    showToast("ERROR: Fallo en la comunicacion con el API REST", "bg-danger")
                    console.log(error)
                })
        }
    }
}

function deleteStudent() {
    let alumno = new Alumno("", "", "", "", document.getElementById("id").value)
    let id = document.getElementById("id").value
    let url = "http://localhost:3000/student";
    if (validarId(alumno)) {
        let param =
        {
            headers: { "content-type": "application/json; charset= UTF-8" },
            body: JSON.stringify(alumno),
            method: "DELETE",
        }
        fetch(url, param)

            .then(function (data) {
                return data.json()
            })
            .then(function (result) {
                console.log(result);
                if (result != "-1") {
                    showToast("Usuario Eliminado Correctamente", "bg-success")
                }
                else {
                    // showToast("Usuario Eliminado Correctamente", "bg-success")
                    console.log(result);
                }
            })
            .catch(function (error) {
                console.log(error)
            })
    }
}

function validar(alumno) {
    resultado = false
    if (alumno.first_name1 == "" || alumno.first_name1 == "null") {
        showToast("AVISO: Faltan campos para rellenar", "bg-warning")
    }
    else if (alumno.last_name1 == "" || alumno.last_name1 == "null") {
        showToast("AVISO: Faltan campos para rellenar", "bg-warning")
    }
    else if (alumno.id_group == "" || alumno.id_group == "null") {
        showToast("AVISO: Faltan campos para rellenar", "bg-warning")
    }
    else if (alumno.entry == "" || alumno.entry == "null") {
        showToast("AVISO: Faltan campos para rellenar", "bg-warning")
    }
    else
        resultado = true
    return resultado;
}

function validarId(alumno) {
    resultado = false
    if (alumno.id_student == "" || alumno.id_student == "null") {
        showToast("AVISO: Introducir Id", "bg-danger")
    }
    else
        resultado = true
    return resultado
}

function showToast(message, color) {
    document.getElementById("toastText").innerText = message;
    let toastElement = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " " + color;

    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}