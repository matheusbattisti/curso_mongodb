// modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// routes
const authRouter = require("./routes/authRoutes.js");
const userRouter = require("./routes/userRoutes.js");

// middlewares
const verifyToken = require("./validation/check-token");

// config
const dbName = "partytime";
const port = 3000;

const app = express();

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/user", verifyToken, userRouter);

mongoose.connect(
  "mongodb://localhost/partytime",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

app.get("/", (req, res) => {
  res.json({ message: "Rota teste." });
});

app.listen(port, () => {
  console.log(`O backend está rodando na porta ${port}`);
});