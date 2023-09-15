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

async function addCar(cara) {
  try {
    let pool = await sql.connect(config);
    let car = await pool
      .request()
      .input("Matricula", sql.VarChar, cara.Matricula)
      .input("Color", sql.VarChar, cara.Color)
      .input("Tipo", sql.VarChar, cara.Tipo)
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

async function modCar(carm) {
  try {
    let pool = await sql.connect(config);
    let car = await pool
      .request()
      .input("Matricula", sql.VarChar, carm.Matricula)
      .input("Color", sql.VarChar, carm.Color)
      .input("Tipo", sql.VarChar, carm.Tipo)
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
