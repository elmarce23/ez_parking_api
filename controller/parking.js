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
      let data = await pool.request().query("SELECT * FROM Lugares WHERE libre <> 1 ORDER BY cv ASC"); // On the response of the connect method, we execute the query.
      return data.recordsets; // This return the recordsets of the query result in an array.
    } catch (error) {
      console.log(error); // Display the error
    }
  }

// Company EXECS
async function getCompanyData() {
  // This function return the Company Data
  try {
    let pool = await sql.connect(config); // This line accepts the database configuration object and returns a promise.
    let data = await pool.request().query("SELECT * FROM Empresa"); // On the response of the connect method, we execute the query.
    return data.recordsets; // This return the recordsets of the query result in an array.
  } catch (error) {
    console.log(error); // Display the error
  }
}

async function updateCompanyData(company) {
  // This function update the Company Data
  try {
    let pool = await sql.connect(config);
    let putCompany = await pool
      .request()
      .input("Empresa", sql.VarChar, company.Empresa)
      .input("RFC", sql.VarChar, company.RFC)
      .input("Direccion", sql.VarChar, company.Direccion)
      .input("Tel", sql.VarChar, company.Tel)
      .input("Logo", sql.VarChar, company.Logo)
      .query(
        "UPDATE Empresa SET nombre = @Empresa, rfc=@RFC, direccion=@Direccion, telefono=@Tel, logo=@Logo"
      );
    return putCompany.recordsets;
  } catch (error) {
    console.log(error);
  }
}

// Cars EXECS
async function getCarData(carPlate) {
  // This function return all Cars, and if the carPlate isn't null, return that especific car
  try {
    let query = "SELECT * FROM Vehiculos"; // Prepare the Query
    if (carPlate != null && carPlate != undefined) {
      query += " WHERE matricula = @Matricula"; // If carPlate isn't null, add Where clause
    }
    console.log(query);
    let pool = await sql.connect(config);
    let car = await pool
      .request()
      .input("Matricula", sql.VarChar, carPlate)
      .query(query);
    return car.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function addCar(car){
    try {
        let pool = await sql.connect(config);
        let car = await pool.request()
        .input("Matricula", sql.VarChar, company.Matricula)
        .input("Color", sql.VarChar, company.Color)
        .input("Tipo", sql.VarChar, company.Tipo)
        .query(
            "INSERT INTO Vehiculos VALUES (@Matricula. @Color, @Tipo)"
        );
        return car.recordsets;
    } catch (error) {
        console.log(error);
    }
}

// Exporting modules
module.exports = {
  getCarTypes: getCarTypes,
  getTicketState: getTicketState,
  getFreePlaces: getFreePlaces,
  getCompanyData: getCompanyData,
  updateCompanyData: updateCompanyData,
  getCarData: getCarData,
  addCar: addCar
};
