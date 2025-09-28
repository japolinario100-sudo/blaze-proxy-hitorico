const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 10000;

app.get("/", (req, res) => {
  res.send("✅ Servidor rodando!");
});

app.get("/historico", async (req, res) => {
  try {
    const response = await fetch("https://blaze.com/api/roulette_games/recent");
    const data = await response.json();

    const formatado = data.map((item) => ({
      cor: item.color,
      numero: item.roll,
      horario: item.created_at,
    }));

    res.json(formatado);
  } catch (error) {
    console.error("Erro ao buscar histórico:", error);
    res.status(500).json({ erro: "Falha ao buscar histórico" });
  }
});

app.listen(PORT, () => {
  console.log(🚀 Servidor rodando na porta ${PORT});
});
