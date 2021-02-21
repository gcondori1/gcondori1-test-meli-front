const express = require('express'),
  app = express(),  
  bodyParser = require('body-parser'),
  methodOverride = require('method-override');
require('dotenv').config()
require('./src/rest/routes/productRoute')(app);

const testApiUrl = process.env.TEST_MELI_API_URL;
const testApiPort = process.env.TEST_MELI_API_PORT;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
const router = express.Router();

app.use(router);
app.listen(testApiPort, function () {
  console.log(`api listing on ${testApiUrl}:${testApiPort}`);
});