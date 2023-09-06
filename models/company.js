const { request, response } = require("express");
const db = require('../controller/parking');

const getData = (req, res) => {
    let query = "SELECT * FROM Empresa;";
    db.query(query, (err, data) => {
        if (err) throw err;
        response.status(200).json(data);
        console.log(data);
    });
};

const updateData = (req, res) => {
    let { nombre, rfc, direccion, telefono, logo } = request.body;
    console.log(request.body);
    let query =
        "UPDATE Empresa SET nombre = '" +
        nombre +
        "', rfc = '" +
        rfc +
        "', direccion='" +
        direccion +
        "', telefono='" +
        telefono +
        "', logo='" +
        logo + "';";
    db.query(query, (error) => {
        if (error) throw error;
        response.status(200).send("Registro Actualizado");
    });
};

module.exports = {
    getData,
    updateData,
};
