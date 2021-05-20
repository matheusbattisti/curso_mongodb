const express = require("express");
const mongoose = require("mongoose");
const foodRouter = require("./routes/foodRoutes.js");

const app = express();

const dbName = "partytime";
const port = 3000;

app.use(express.json());

mongoose.connect(
  "mongodb://localhost/partytime",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

app.listen(port, () => {
  console.log(`O backend está rodando na porta ${port}`);
});