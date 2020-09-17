
const users = [{nombre: "Juanito", apellido: "Perez", email: "juanito@perez.com", usuario: "juanito", contraseña: "12345", activo: true},
{nombre: "Pepito", apellido: "Perez", email: "pepito@perez.com", usuario: "pepito", contraseña: "12345", activo: false}];

function login() {
const username = prompt('Ingrese nombre de usuario')
const password = prompt('Ingrese contraseña')
    try {
        users.forEach(function(user){
            if(user.usuario == username && user.contraseña == password && user.activo == true){
                console.log(`Bienvenido ${user.nombre}`)
                
            } else{ 
                //To do: ¿Por qué siempre se muestra este error?: Porque está dentro del for each.
                console.log('Error en el login')
            }
        })
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

    users.forEach(function(user){
        if(user.usuario.includes(person.usuario)){
            console.log("Ese usuario ya existe")
        }else{
            //To do: sacar el push del For each
            users.push(person)
        }   
    })
}


function update(){
    const usernameToUpdate = prompt("¿Qué usuario quieres modificar?")
    users.forEach(function(user){
        if(!user.usuario.includes(usernameToUpdate)){
            //To do: ¿Por qué siempre se muestra este error?
            console.log("Ese usuario no existe")
        }
        
        if(user.usuario == usernameToUpdate){
            user.nombre = prompt("¿Cual es tu nombre?")
            user.apellido = prompt("¿Cual es tu apellido")
            user.email = prompt("¿Cual es tu email")
            user.usuario = prompt("¿Cual es tu nombre de usuario?")
            user.contraseña = prompt("¿Cual es tu contraseña")
            user.activo = true
        }   
    })
    console.log(users)
}
login()
register()
update()
