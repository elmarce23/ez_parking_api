const { request, response } = require("express");
const db = require('../controller/parking');

const getData = () => {
    let query = "SELECT * FROM Vehiculos ORDER BY matricula;";
    db.query(query, (err, data) => {
        if (err) throw err;
        response.status(200).json(data);
        console.log(data);
    });
};

const addData = () => {
    let { matricula, color, tipo } = request.body;
    let query = "INSERT INTO Vehiculos VALUES ('" + matricula + "', '" + color + "', " + tipo + ")";
    db.query(query, (err, data) => {
        if (err) throw err;
        response.status(200).send("Vehiculo Registrado");
    });
};

const updateData = () => {
    let { matricula, color, tipo } = request.body;
    let query = "UPDATE Vehiculos SET matricula='" + matricula + "', color='" + color + "', tipo=" + tipo + " WHERE matricula = '" + matricula + "';";
    db.query(query, (err, data) => {
        if(err) throw err;
        response.status(200).send("Vehiculo Actualizado");
    });
};

const delData = () => {
    let { matricula } = request.body;
    let query = "DELETE FROM Vehiculos WHERE matricula = '" + matricula + "'";
    db.query(query, (err, data) => {
        if(err) throw err;
        response.status(200).send("Vehiculo Eliminado");
    });
};

module.exports = {
    getData,
    addData,
    updateData,
    delData
};