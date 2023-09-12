const config = require("./db");
const sql = require("mssql");

// Dictionaries
async function getCarTypes() {
  // This function return the Car Types
  try {
    let pool = await sql.connect(config); // This line accepts the database configuration object and returns a promise.
    let data = await pool.request().query("SELECT * FROM TipoVehiculos"); // On the response of the connect method, we execute the query.
    return data.recordsets; // This return the recordsets of the query result in an array.
  } catch (error) {
    console.log(error); // Display the error
  }
}

async function getTicketState() {
  // This function return the dictionary state of ticket
  try {
    let pool = await sql.connect(config); // This line accepts the database configuration object and returns a promise.
    let data = await pool.request().query("SELECT * FROM EstadoTicket"); // On the response of the connect method, we execute the query.
    return data.recordsets; // This return the recordsets of the query result in an array.
  } catch (error) {
    console.log(error); // Display the error
  }
}

async function getFreePlaces() {
  // This function return all the free places in the parking
  try {
    let pool = await sql.connect(config); // This line accepts the database configuration object and returns a promise.
    let data = await pool
      .request()
      .query("SELECT * FROM Lugares WHERE libre <> 1 ORDER BY cv ASC"); // On the response of the connect method, we execute the query.
    return data.recordsets; // This return the recordsets of the query result in an array.
  } catch (error) {
    console.log(error); // Display the error
  }
}

module.exports = {
  getCarTypes: getCarTypes,
  getTicketState: getTicketState,
  getFreePlaces: getFreePlaces,
};
