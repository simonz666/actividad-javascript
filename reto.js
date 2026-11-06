const perfil = {nombre:"María",
    apellido:"Gómez",
    edad:"25"};

const direccion = {pais:"Colombia",
    calle:"40",
    ciudad:"Bogotá"};

const usuario = [perfil,direccion]

function presentarse() {
    return console.log("Hola, soy",perfil.nombre,perfil.apellido,"tengo",perfil.edad, "años y vivo en", direccion.ciudad, direccion.pais);
    
    
}

presentarse(perfil,direccion)