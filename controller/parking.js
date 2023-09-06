const sql = require("mssql");

// Configuración de la conexión
const config = {
  user: "sa",
  password: "12345678",
  server: "DESKTOP-UED60N8", // Cambia esto según la ubicación de tu servidor SQL Server
  database: "IAPARKING2023",
  options: {
    trustServerCertificate: true, // Establece esto si estás usando una conexión segura (SSL/TLS)
  },
  pool: {
    max: 10, // Número máximo de conexiones en el pool
    min: 0,  // Número mínimo de conexiones en el pool
    idleTimeoutMillis: 5000, // Tiempo de espera en milisegundos antes de que una conexión inactiva se elimine del pool
  },
};

// Crear el pool de conexiones
//const pool = new sql.ConnectionPool(config);

module.exports = new sql.ConnectionPool(config);