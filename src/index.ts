import express from "express";
const app = express();

import indexRouter from "./routes/index";

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(indexRouter);

app.listen(4000);
console.log("servidor rodando na porta", 4000);
