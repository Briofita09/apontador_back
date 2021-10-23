import { Router } from "express";
const router = Router();

import {
  getGrupos,
  getGrupoById,
  createGrupo,
} from "../controllers/index.controller";

router.get("/grupos", getGrupos);
router.get("/grupos/:id/details", getGrupoById);
router.post("/createGrupo", createGrupo);

export default router;
