const config = require("./db");
const sql = require("mssql");

async function getClient(cvc) {
  // TODO CODE here
  try {
    let pool = await sql.connect(config);
    let client = await pool
      .request()
      .input("CVC", sql.Int, cvc)
      .query("DELETE FROM Clientes WHERE cvc = @CVC");
    return client.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getClients() {
  // TODO CODE here
  try {
    let pool = await sql.connect(config);
    let client = await pool
      .request()
      .input("CVC", sql.Int, cvc)
      .query("DELETE FROM Clientes WHERE cvc = @CVC");
    return client.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function newClient(req_client) {
  // TODO CODE here
  try {
    let pool = await sql.connect(config);
    let client = await pool
      .request()
      .input("CVC", sql.Int, req_client.CVC)
      .input("Nombre", sql.VarChar, req_client.Nombre)
      .input("Tel", sql.VarChar, req_client.Tel)
      .input("Correo", sql.VarChar, req_client.Correo)
      .input("Precio", sql.TinyInt, req_client.Precio)
      .query("UPDATE Clientes set nombre = @Nombre, telefono = @Tel, correo = @Correo, precio = @Precio WHERE cvc = @CVC");
    return client.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function updateClient(req_client) {
  // TODO CODE here
  try {
    let pool = await sql.connect(config);
    let client = await pool
      .request()
      .input("CVC", sql.Int, req_client.CVC)
      .input("Nombre", sql.VarChar, req_client.Nombre)
      .input("Tel", sql.VarChar, req_client.Tel)
      .input("Correo", sql.VarChar, req_client.Correo)
      .input("Precio", sql.TinyInt, req_client.Precio)
      .query("UPDATE Clientes set nombre = @Nombre, telefono = @Tel, correo = @Correo, precio = @Precio WHERE cvc = @CVC");
    return client.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function delClient(cvc) {
  // TODO CODE here
  try {
    let pool = await sql.connect(config);
    let client = await pool
      .request()
      .input("CVC", sql.Int, cvc)
      .query("DELETE FROM Clientes WHERE cvc = @CVC");
    return client.recordsets;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getClient: getClient,
  getClients: getClients,
  newClient: newClient,
  updateClient: updateClient,
  delClient: delClient,
};
