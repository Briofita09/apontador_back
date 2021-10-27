"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const index_controller_1 = require("../Controllers/index.controller");
router.get("/grupos", index_controller_1.getGrupos);
router.get("/grupos/:id", index_controller_1.getGrupoById);
router.post("/createGrupo", index_controller_1.createGrupo);
exports.default = router;
