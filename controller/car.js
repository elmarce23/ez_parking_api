const config = require("./db");
const sql = require("mssql");

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

async function addCar(car) {
  try {
    let pool = await sql.connect(config);
    let car = await pool
      .request()
      .input("Matricula", sql.VarChar, company.Matricula)
      .input("Color", sql.VarChar, company.Color)
      .input("Tipo", sql.VarChar, company.Tipo)
      .query("INSERT INTO Vehiculos VALUES (@Matricula. @Color, @Tipo)");
    return car.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function delCar(carPlate) {
  try {
    let pool = await sql.connect(config);
    let car = await pool
      .request()
      .input("Matricula", sql.VarChar, carPlate)
      .query("DELETE FROM Vehiculos WHERE matricula = @Matricula");
  } catch (error) {
    console.log(error);
  }
}

async function modCar(car) {
  try {
    let pool = await sql.connect(config);
    let car = await pool
      .request()
      .input("Matricula", sql.VarChar, company.Matricula)
      .input("Color", sql.VarChar, company.Color)
      .input("Tipo", sql.VarChar, company.Tipo)
      .query(
        "UPDATE Vehiculos SET color =  @Color, tipo = @Tipo WHERE matricula = @Matricula"
      );
    return car.recordsets;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getCarData: getCarData,
  addCar: addCar,
  delCar: delCar,
  modCar: modCar,
};
