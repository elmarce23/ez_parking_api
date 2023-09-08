const sql = require("mssql");

// Configuración de la conexión
const config = {
  user: "sa",
  password: "12345678",
  server: "localhost", // Cambia esto según la ubicación de tu servidor SQL Server
  database: "IAPARKING2023",
  options: {
    trustedconnection:  true,
    enableArithAbort:  true,
    trustServerCertificate: true/*,
    instancename:  'SQLEXPRESS'  // SQL Server instance name*/
  }
};

module.exports = config;