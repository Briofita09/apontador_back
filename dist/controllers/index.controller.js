"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGrupo = exports.getGrupoById = exports.getGrupos = void 0;
const database_1 = require("../database");
const getGrupos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query("SELECT * FROM grupos");
        return res.status(200).json(response.rows);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json("Erro interno do servidor");
    }
});
exports.getGrupos = getGrupos;
const getGrupoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield database_1.pool.query("SELECT * FROM grupos WHERE id = $1", [id]);
        return res.status(200).json(response.rows);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json("Erro interno do servidor");
    }
});
exports.getGrupoById = getGrupoById;
const createGrupo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, link, lat, lng } = req.body;
        const response = yield database_1.pool.query("INSERT INTO grupos (name, description, link, lat, lng) VALUES($1, $2, $3, $4, $5)", [name, description, link, lat, lng]);
        return res.status(200).json({
            message: "Grupo adicionado com sucesso",
            body: {
                name,
                description,
                link,
                lat,
                lng,
            },
        });
    }
    catch (err) {
        return res
            .status(400)
            .json({ message: "O nome contem mais de 40 caracteres!" });
    }
});
exports.createGrupo = createGrupo;
