const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.ATLAS_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(res => {
    console.log("MongoDB connected...");
  })
  .catch(err => {
    console.log("MongoDB failed to connect!", err);
  });
mongoose.set("useFindAndModify", false);

const app = express();
app.use(cors());
app.use(bodyParser.json());

require("./api")(app);

module.exports = app;
