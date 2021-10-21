import { Request, Response } from "express";
import { QueryResult } from "pg";

import { pool } from "../database";

export const getGrupos = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query("SELECT * FROM grupos");
    return res.status(200).json(response.rows);
  } catch (err) {
    console.log(err);
    return res.status(500).json("Erro interno do servidor");
  }
};

export const getGrupoById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = parseInt(req.params.id);
    const response: QueryResult = await pool.query(
      "SELECT * FROM grupos WHERE id = $1",
      [id]
    );
    return res.status(200).json(response.rows);
  } catch (err) {
    console.log(err);
    return res.status(500).json("Erro interno do servidor");
  }
};

export const createGrupo = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, description, link, lat, lng } = req.body;
    const response: QueryResult = await pool.query(
      "INSERT INTO grupos (name, description, link, lat, lng) VALUES($1, $2, $3, $4, $5)",
      [name, description, link, lat, lng]
    );
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
  } catch (err) {
    console.log(err);
    return res.status(500).json("Erro interno do servidor");
  }
};
