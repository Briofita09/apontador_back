import { Router } from "express";
const router = Router();

import {
  getGrupos,
  getGrupoById,
  createGrupo,
} from "../Controllers/index.controller";

router.get("/grupos", getGrupos);
router.get("/grupos/:id", getGrupoById);
router.post("/createGrupo", createGrupo);

export default router;
