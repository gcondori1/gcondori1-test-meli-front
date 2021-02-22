const express = require('express'),
  app = express(),  
  bodyParser = require('body-parser'),
  cors = require('cors')
require('dotenv').config();

const testApiUrl = process.env.TEST_MELI_API_URL;
const testApiPort = process.env.TEST_MELI_API_PORT;
const frontEndUrl = process.env.FRONTEND_URL;
const frontEndPort = process.env.FRONTEND_PORT;

const corsOptions = {
  origin: `${frontEndUrl}:${frontEndPort}`,
  credentials: true,
  optionsSuccessStatus: 200 
};
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));
const router = express.Router();

app.use(router);
require('./src/rest/routes/productRoute')(app);
app.listen(testApiPort, function () {
  console.log(`api listing on ${testApiUrl}:${testApiPort}`);
});