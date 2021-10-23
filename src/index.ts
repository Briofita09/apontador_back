import express from "express";
import indexRouter from "./routes/index";

const cors = require("cors");
const app = express();
app.use(cors({ origin: process.env.REACT_APP_URL }));

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.options("*", cors());
app.post("/createGroup", cors(), function (req, res, next) {
  res.json({ msg: "This is CORS-enable for all origins!" });
});
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  app.use(cors());
  next();
});

app.use(indexRouter);

app.listen(4000);
console.log("servidor rodando na porta", 4000);
