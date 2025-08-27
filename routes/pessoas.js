import express from "express";
import db from "../db.js";

const router = express.Router();

router.get("/", (req, res) => {
  db.query("SELECT * FROM pessoas", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

router.post("/", (req, res) => {
  const { nome, area } = req.body;
  if (!nome || !area) {
    return res.status(400).json({ error: "Nome e área são obrigatórios" });
  }

  db.query("INSERT INTO pessoas (nome, area) VALUES (?, ?)", [nome, area], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ id: result.insertId, nome, area });
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM pessoas WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ success: true });
  });
});

export default router;
