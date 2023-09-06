const express = require("express");
const bodyParser = require("body-parser");
const cars = require("./models/cars");
const client = require("./models/clients");
const comp = require("./models/company");
const plac = require("./models/places");
const tck = require("./models/ticket");
const user = require("./models/users");

// incializamos el servidor
const app = express();
const port = 3000;

app.use(express.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.get('/', (req, res) => {
    res.json({
        Bienvenido: "API creada con NODEJS, Express y MSSQL"
    });
});

app.get('/cars/', cars.getData);

app.get('/company/', comp.getData);
app.put('/company/', comp.updateData);

// ponemos el Server en escucha en port 3000
app.listen(port, () => {
    console.log("API ejecutandose en el puerto:"+ port);
});