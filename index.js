const db = require("./controller/parking");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

//clases
const company = require('./models/company');

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

router.route('/company').get((request, response) => {
    db.getCompanyData().then((data) => {
      response.json(data[0]);
    })
  });  

  router.route('/company').put((request, response) => {
    let company = { ...request.body };
    console.log(company);
    db.updateCompanyData(company).then((data) => {
      response.status(201).json(data);
    })
  });

// ponemos el Server en escucha en port 3000
app.listen(port, () => {
    console.log("API ejecutandose en el puerto:" + port);
  });