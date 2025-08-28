const express = require("express")
const app = express()

// Config to accept JSON on BODY
app.use(express.json())

const PORT = 3004;

// start server on the port 3004
app.listen(PORT, () => {
  console.log(`Iniciando servidor de pedidos na porta ${PORT}`);
});
