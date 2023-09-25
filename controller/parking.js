const config = require("./db");
const sql = require("mssql");

async function getTicket(cvTicket) {
    try {
        let pool = await sql.connect(config);
        let query = "SELECT * FROM Ticket WHERE ticket = @cvc";
        let rs = await pool.request().input("cvc", sql.Int, cvTicket).query(query);
        return rs.recordsets;
    } catch (error) {
        console.log(error);
    }
}

async function getTickets() {
    try {
        let pool = await sql.connect(config);
        let query = "SELECT * FROM Ticket";
        let rs = await pool.request().query(query);
        return rs.recordsets;
    } catch (error) {
        console.log(error);
    }
}

async function newTicket(ticket) {
    try {
        let pool = await sql.connect(config);
        let query = "INSERT INTO Ticket VALUES (@Ticket, @Usuario, @Vehiculo, @Cliente, @Lugar, @Importe, @Fecha, @HoraE, @HoraS, @Estado)";
        let rs = await pool
            .request()
            .input("Ticket", sql.Int, ticket.Ticket)
            .input("Usuario", sql.Int, ticket.Usuario)
            .input("Vehiculo", sql.VarChar, ticket.Vehiculo)
            .input("Cliente", sql.Int, ticket.Cliente)
            .input("Lugar", sql.Int, ticket.Lugar)
            .input("Importe", sql.Float, ticket.Importe)
            .input("Fecha", sql.Date, ticket.Fecha)
            .input("HoraE", sql.Time, ticket.HoraE)
            .input("HoraS", sql.Time, ticket.HoraS)
            .input("Estado", sql.TinyInt, ticket.Estado)
            .query(query);
        return rs.recordsets;
    } catch (error) {
        console.log(error);
    }
}

async function cobraTicket(ticket) {
    try {
        let query = "UPDATE Ticket SET estado = 2 WHERE ticket = @Ticket";
        let pool = await sql.connect(config);
        let rs = await pool.request().input("Ticket", sql.Int, ticket).query(query);
        return rs.recordsets;
    } catch (error) {
        console.log(error);
    }
}

async function cancelTicket(cvTicket) {
    try {
        let pool = await sql.connect(config);
        let query = "UPDATE Ticket SET estado = 3 WHERE ticket = @cvc";
        let rs = await pool.request().input("cvc", sql.Int, cvTicket).query(query);
        return rs.recordsets;
    } catch (error) {
        console.log(error);
    }
}

// Exporting modules
module.exports = {
    newTicket: newTicket,
    cancelTicket: cancelTicket,
    getTicket: getTicket,
    getTickets: getTickets,
    cobraTicket: cobraTicket
};