const config = require("./db");
const sql = require("mssql");

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

module.exports = {
  getCompanyData: getCompanyData,
  updateCompanyData: updateCompanyData,
};
