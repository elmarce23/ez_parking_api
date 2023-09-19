const config = require("./db");
const sql = require("mssql");

async function getUser(cv) {
  // TODO CODE here
  try {
    let query = "SELECT * FROM Usuarios"; // Prepare the Query
    query += " WHERE cv = @CV"; 
    console.log(query);
    let pool = await sql.connect(config);
    let car = await pool
      .request()
      .input("CV", sql.VarChar, cv)
      .query(query);
    return car.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getUsers() {
  // TODO CODE here
  try {
    let query = "SELECT * FROM Usuarios"; // Prepare the Query
    let pool = await sql.connect(config);
    let cars = await pool
      .request()
      .query(query);
    return cars.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function newUser(user) {
  // TODO CODE here
  try {
    let pool = await sql.connect(config);
    let q = await pool
      .request()
      .input("CV", sql.Int, user.cv)
      .input("Nombre", sql.VarChar, user.Nombre)
      .input("Clave", sql.VarChar, user.Clave)
      .input("Supervisor", sql.TinyInt, user.Supervisor)
      .query("INSERT INTO Usuarios VALUES (@CV. @Nombre, @Clave, @Supervisor)");
    return q.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function updateUser(user) {
  // TODO CODE here
  try {
    let pool = await sql.connect(config);
    let q = await pool
      .request()
      .input("CV", sql.Int, user.cv)
      .input("Nombre", sql.VarChar, user.Nombre)
      .input("Clave", sql.VarChar, user.Clave)
      .input("Supervisor", sql.TinyInt, user.Supervisor)
      .query("UPDATE Usuarios SET nombre = @Nombre, clave = @Clave, supervisor = @Supervisor WHERE cv = @CV");
    return q.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function delUser(cvUser) {
  // TODO CODE here
  try {
    let pool = await sql.connect(config);
    let q = await pool
      .request()
      .input("CV", sql.Int, cvUser)
      .query("DELETE FROM Usuarios WHERE cv = @CV");
    return q.recordsets;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  newUser: newUser,
  updateUser: updateUser,
  delUser: delUser
};
