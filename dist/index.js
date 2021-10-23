"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const cors = require("cors");
const app = (0, express_1.default)();
app.use(cors({ origin: process.env.REACT_APP_URL }));
//middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.options("*", cors());
app.post("/createGroup", cors(), function (req, res, next) {
    res.json({ msg: "This is CORS-enable for all origins!" });
});
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    app.use(cors());
    next();
});
app.use(index_1.default);
app.listen(4000);
console.log("servidor rodando na porta", 4000);
