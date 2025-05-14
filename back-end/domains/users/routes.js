import { Router } from "express";
import { connectDb } from "../../config/db.js";
import User from "./model.js";
import bcrypt from "bcryptjs";

const router = Router();
const bcryptSalt = bcrypt.genSaltSync(10);

router.get("/", async (req, res) => {
  try {
    await connectDb(); // ✅ Usa await
    const userDoc = await User.find();
    res.json(userDoc);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuários", details: error });
  }
});

router.post("/", async (req, res) => {
  try {
    await connectDb(); // ✅ Usa await

    const { name, email, password } = req.body;

    // ✅ Validação simples
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }

    const encryptedPassword = bcrypt.hashSync(password, bcryptSalt);

    const newUserDoc = await User.create({
      name,
      email,
      password: encryptedPassword,
    });

    res.status(201).json(newUserDoc);
  } catch (error) {
    res.status(500).json({ error: "Erro ao cadastrar usuário", details: error });
  }
});

export default router;
