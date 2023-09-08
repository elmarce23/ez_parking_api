class Client {
    constructor(cvc, nombre, telefono, correo, precio){
        this.cvc = cvc;
        this.nombre = nombre;
        this.telefono = telefono;
        this.correo = correo;
        this.precio = precio;
    }
}

module.exports = Client;