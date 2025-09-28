const express = require("express");
const fetch = require("node-fetch");
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("✅ Servidor rodando!");
});

app.get("/historico", async (req, res) => {
  try {
    const response = await fetch("https://blaze.com/api/roulette_games/recent");
    const data = await response.json();

    const resultados = data.map((item) => ({
      cor: item.color,     // 0 = vermelho, 1 = preto, 2 = branco
      numero: item.roll,
      criado_em: item.created_at,
    }));

    res.json(resultados);
  } catch (err) {
    res.status(500).json({ erro: "Falha ao buscar histórico" });
  }
});

app.listen(PORT, () => {
  console.log(Servidor rodando na porta ${PORT});
});
