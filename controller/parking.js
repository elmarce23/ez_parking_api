const config = require("./db");
const sql = require("mssql");

async function getCompanyData(){
    try{
        let pool = await sql.connect(config);
        let data = await pool.request().query("SELECT * FROM Empresa");
        return data.recordsets;
    }catch(error){
        console.log(error);
    }
}

async function updateCompanyData(company){
    try {
        let pool = await sql.connect(config);
        let putCompany = await pool.request()
            .input('Empresa', sql.VarChar, company.Empresa)
            .input('RFC', sql.VarChar, company.RFC)
            .input('Direccion', sql.VarChar, company.Direccion)
            .input('Tel', sql.VarChar, company.Tel)
            .input('Logo', sql.VarChar, company.Logo)
            .query("UPDATE Empresa SET nombre = @Empresa, rfc=@RFC, direccion=@Direccion, telefono=@Tel, logo=@Logo");
        return putCompany.recordsets;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getCompanyData: getCompanyData,
    updateCompanyData: updateCompanyData
}