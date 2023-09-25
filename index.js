// importing tools
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// importing controllers
const ticket = require("./controller/parking");
const car = require("./controller/car");
const company = require("./controller/company");
const dicc = require("./controller/dictionaries");
const client = require("./controller/client");
const user = require("./controller/user");

// incializamos el servidor
const app = express();
const port = 3000;
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use("/api", router);

router.use((request, response, next) => {
    console.log("middleware");
    next();
});

//vehiculos
router.route("/cars").get((req, res) => {
    car.getCarTypes().then((data) => {
        res.json(data[0]);
    });
});

router.route('/cars/:matricula').get((req, res) => {
    car.getCarData(req.params.matricula).then((data) => {
        res.json(data[0]);
    });
});

router.route('/cars/:matricula').delete((req, res) => {
    car.delCar(req.params.matricula).then((data) => {
        res.json(data[0]);
    });
});

router.route("/cars").post((req, res) => {
    let card = {...req.body };
    car.addCar(card).then((data) => {
        res.status(201).json(data);
    });
});

router.route("/cars").put((req, res) => {
    let card = {...req.body };
    car.modCar(card).then((data) => {
        res.status(201).json(data);
    });
});

//lugares
router.route("/places").get((req, res) => {
    dicc.getFreePlaces().then((data) => {
        res.json(data[0]);
    });
});

//tipo de carros
router.route("/type").get((req, res) => {
    dicc.getCarTypes().then((data) => {
        res.json(data[0]);
    });
});

//estado del ticket
router.route("/ticketsedo").get((req, res) => {
    dicc.getTicketState().then((data) => {
        res.json(data[0]);
    });
});

//company
router.route("/company").get((request, response) => {
    company.getCompanyData().then((data) => {
        response.json(data[0]);
    });
});

router.route("/company").put((request, response) => {
    let companyd = {...request.body };
    console.log(companyd);
    company.updateCompanyData(companyd).then((data) => {
        response.status(201).json(data);
    });
});

//clientes
router.route("/client").get((request, response) => {
    client.getClients().then((data) => {
        response.json(data);
    });
});

router.route("/client/:cvc").get((request, response) => {
    client.getClient(request.params.cvc).then((data) => {
        response.json(data);
    });
});

router.route("/client/:cvc").get((request, response) => {
    client.delClient(request.params.cvc).then((data) => {
        response.json(data);
    });
});

router.route("/client").post((request, response) => {
    let client_data = {...request.body };
    client.newClient(client_data).then((data) => {
        res.status(201).json(data);
    });
});

router.route("/client").post((request, response) => {
    let client_data = {...request.body };
    client.modCar(client_data).then((data) => {
        res.status(201).json(data);
    });
});

//usuarios
router.route("/user").get((request, response) => {
    user.getUsers().then((data) => {
        response.json(data);
    });
});

router.route("/user/:cvc").get((request, response) => {
    user.getUser(request.params.cvc).then((data) => {
        response.json(data);
    });
});

router.route("/user/:cvc").get((request, response) => {
    user.delUser(request.params.cvc).then((data) => {
        response.json(data);
    });
});

router.route("/user").post((request, response) => {
    let user_data = {...request.body };
    user.newUser(user_data).then((data) => {
        res.status(201).json(data);
    });
});

router.route("/user").post((request, response) => {
    let user_data = {...request.body };
    user.updateUser(user_data).then((data) => {
        res.status(201).json(data);
    });
});

//ticket

// ponemos el Server en escucha en port 3000
// put server listening on port 3000 
app.listen(port, () => {
    console.log("API ejecutandose en el puerto:" + port);
});