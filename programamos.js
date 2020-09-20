
const users = [{nombre: "Juanito", apellido: "Perez", email: "juanito@perez.com", usuario: "juanito", contraseña: "12345", activo: true},
{nombre: "Pepito", apellido: "Perez", email: "pepito@perez.com", usuario: "pepito", contraseña: "12345", activo: false}];

function login() {
const username = prompt('Ingrese nombre de usuario')
const password = prompt('Ingrese contraseña')
    try {
       const u =  users.find(user => user.usuario == username && user.contraseña == password && user.activo == true)
        if(users.includes(u)){
            console.log("usuario loggeado")
        } else {
            console.log("error en el login")
        }
    } catch (reason) {
        alert(reason);
    }
}

function register(){
    const person = new Object();
    person.nombre = prompt("¿Cual es tu nombre?")
    person.apellido = prompt("¿Cual es tu apellido")
    person.email = prompt("¿Cual es tu email")
    person.usuario = prompt("¿Cual es tu nombre de usuario?")
    person.contraseña = prompt("¿Cual es tu contraseña")
    person.activo = true

    const u =  users.find(user => user.usuario == person.usuario)
    if(users.includes(u)){
        console.log("Ese usuario ya existe")
    } else {
        users.push(person)
    }        
    
}


function update(){
    const usernameToUpdate = prompt("¿Qué usuario quieres modificar?")
    const u =  users.find(user => user.usuario == usernameToUpdate)
    if(!users.includes(u)){
        console.log("Ese usuario no existe")
    } else {
            u.nombre= prompt("¿Cual es tu nombre?")
            u.apellido = prompt("¿Cual es tu apellido")
            u.email = prompt("¿Cual es tu email")
            u.usuario = prompt("¿Cual es tu nombre de usuario?")
            u.contraseña = prompt("¿Cual es tu contraseña")
            u.activo = true
    } 
 
    
}

login()
register()
update()

console.log(users)
