class Ticket{
    constructor(ticket, usuario, vehiculo, cliente, lugar, importe, fecha, hora_entrada, hora_salida, estado){
        this.ticket = ticket;
        this.usuario = usuario;
        this.vehiculo = vehiculo;
        this.cliente = cliente;
        this.lugar = lugar;
        this.importe = importe;
        this.fecha = fecha;
        this.hora_entrada = hora_entrada;
        this.hora_salida = hora_salida;
        this.estado = estado;
    }
}

module.exports = Ticket;