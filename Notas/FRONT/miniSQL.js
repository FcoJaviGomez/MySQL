class Nota {
    constructor(id_student, id_subject, data1, mark, id_mark) {
        this.id_student = id_student
        this.id_subject = id_subject;
        this.data1 = data1;
        this.mark = mark;
        this.id_mark = id_mark;

    }
}

function getNota() {

    let id = document.getElementById("id").value
    let mostrar = document.getElementById("mostrar")
    let url = "http://localhost:3000/mark"

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
                                        <th>Id Estudiante</th>
                                        <th>Id Asignatura</th>
                                        <th>Fecha</th>
                                        <th>Nota</th>
                                        </tr>`
                for (let i = 0; i < result.length; i++) {
                    mostrar.innerHTML +=
                        ` <tr>       
                            <td>${result[i].id_student}</td>
                            <td>${result[i].id_subject}</td>
                            <td>${result[i].data.substring(0, 10)}</td>
                            <td>${result[i].mark}</td>
                        </tr>`
                }
            }
            else if (id === "") {
                mostrar.innerHTML = `<tr>                                    
                                        <th>Id Estudiante</th>
                                        <th>Id Asignatura</th>
                                        <th>Fecha</th>
                                        <th>Nota</th>
                                        </tr > `
                for (let i = 0; i < result.length; i++) {
                    mostrar.innerHTML +=
                        ` <tr>
                                        <td>${result[i].id_student}</td>
                                        <td>${result[i].id_subject}</td>
                                        <td>${result[i].data.substring(0, 10)}</td>
                                        <td>${result[i].mark}</td>
                                      </tr> `
                    console.log(mostrar);
                }
            }
            else
                showToast("ERROR: el usuario con id: " + id + " no existe", "bg-danger")
        })
        .catch(function (error) {
            console.log(error)
        })
}

function getMedia() {

    let id = document.getElementById("id").value
    let mostrar = document.getElementById("mostrar")
    let url = "http://localhost:3000/media"

    if (id != "") {
        url += `?id=${id}`
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
                                        <th>Alumno</th>
                                        <th>Media</th>
                                        </tr>         
                        <tr>
                                <td>${id}</td>
                                <td>${result[0].media}</td>
                              </tr>`
            }
            else
                showToast("ERROR: el usuario con id: " + id + " no existe", "bg-danger")
        })
        .catch(function (error) {
            showToast("ERROR: Fallo en la comunicación con el API REST", "bg-danger")
            console.log(error)
        })
}

function getApuntadas() {

    let id = document.getElementById("id").value
    let mostrar = document.getElementById("mostrar")
    let url = "http://localhost:3000/apuntadas"

    if (id != "") {
        url += `?id=${id}`
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
                                        <th>Alumno</th>
                                        <th>Asignatura</th>
                                        </tr> `

                for (let i = 0; i < result.length; i++) {
                    mostrar.innerHTML += ` <tr>
                                <td>${id}</td>
                                <td>${result[i].title}</td>
                              </tr>`}
            }

            else if (id === "") {
                mostrar.innerHTML = `<tr>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Asignatura</th>
                                        </tr> `
                for (let i = 0; i < result.length; i++) {
                    mostrar.innerHTML += ` <tr>
                                <td>${result[i].first_name1}</td>
                                <td>${result[i].last_name1}</td>
                                <td>${result[i].title}</td>
                              </tr>`
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

function getImpartidas() {

    let id = document.getElementById("id").value
    let mostrar = document.getElementById("mostrar")
    let url = "http://localhost:3000/impartidas"

    if (id != "") {
        url += `?id=${id}`
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
                                        <th>Profesor</th>
                                        <th>Asignatura</th>
                                        </tr> `

                for (let i = 0; i < result.length; i++) {
                    mostrar.innerHTML += ` <tr>
                                <td>${id}</td>
                                <td>${result[i].title}</td>
                              </tr>`}
            }

            else if (id === "") {
                mostrar.innerHTML = `<tr>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Asignatura</th>
                                        </tr> `
                for (let i = 0; i < result.length; i++) {
                    mostrar.innerHTML += ` <tr>
                                <td>${result[i].first_name}</td>
                                <td>${result[i].last_name}</td>
                                <td>${result[i].title}</td>
                              </tr>`
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

function postNota() {

    let nota = new Nota(document.getElementById("id_estudiante").value,
        document.getElementById("id_asignatura").value,
        document.getElementById("fecha").value,
        document.getElementById("nota").value)
    // document.getElementById("id").value)

    const url = "http://localhost:3000/mark";
    if (validar(nota)) {
        let param =
        {
            headers: { "Content-type": "application/json; charset= UTF-8" },
            body: JSON.stringify(nota),
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

function putNota() {
    // let id = document.getElementById("id").value
    let nota = new Nota(document.getElementById("id_estudiante").value,
        document.getElementById("id_asignatura").value,
        document.getElementById("fecha").value,
        document.getElementById("nota").value,
        document.getElementById("id").value)
    console.log(nota);

    const url = "http://localhost:3000/mark";
    if (validarId(nota)) {
        if (validar(nota)) {
            let param =
            {
                headers: { "Content-type": "application/json; charset= UTF-8" },
                body: JSON.stringify(nota),
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

function deleteNota() {
    let nota = new Nota("", "", "", "", document.getElementById("id").value)
    let url = "http://localhost:3000/mark";
    if (validarId(nota)) {
        let param =
        {
            headers: { "content-type": "application/json; charset= UTF-8" },
            body: JSON.stringify(nota),
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

function validar(nota) {
    resultado = false
    if (nota.id_student == "" || nota.id_student == "null") {
        showToast("AVISO: Faltan campos para rellenar", "bg-warning")
    }
    else if (nota.id_subject == "" || nota.id_subject == "null") {
        showToast("AVISO: Faltan campos para rellenar", "bg-warning")
    }
    else if (nota.data == "" || nota.data == "null") {
        showToast("AVISO: Faltan campos para rellenar", "bg-warning")
    }
    else if (nota.mark == "" || nota.mark == "null") {
        showToast("AVISO: Faltan campos para rellenar", "bg-warning")
    }
    else
        resultado = true
    return resultado;
}

function validarId(nota) {
    resultado = false
    if (nota.id_mark == "" || nota.id_mark == "null") {
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