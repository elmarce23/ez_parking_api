// importing tools
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// importing models
const ticket = require("./controller/parking");
const car = require("./controller/car");
const company = require("./controller/company");
const dicc = require("./controller/dictionaries");

//clases
const company_m = require("./models/company");

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

router.route("/cars").post((req, res) => {
  let card = { ...req.body };
  car.addCar(card).then((data) => {
    res.status(201).json(data);
  });
});

//lugares
router.route("/places").get((req, res) => {
  dicc.getFreePlaces().then((data) => {
    res.json(data[0]);
  });
});

router.route("/type").get((req, res) => {
  dicc.getFreePlaces().then((data) => {
    res.json(data[0]);
  });
});

router.route("/places").get((req, res) => {
  dicc.getFreePlaces().then((data) => {
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
  let companyd = { ...request.body };
  console.log(companyd);
  company.updateCompanyData(companyd).then((data) => {
    response.status(201).json(data);
  });
});

// ponemos el Server en escucha en port 3000
// put server listening on port 3000 
app.listen(port, () => {
  console.log("API ejecutandose en el puerto:" + port);
});