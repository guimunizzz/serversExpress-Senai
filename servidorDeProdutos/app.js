const express = require("express")
const app = express()

// Config to accept JSON on BODY
app.use(express.json())

const PORT = 3002;

// start server on the port 3002
app.listen(PORT, () => {
  console.log(`Iniciando servidor de produtos na porta ${PORT}`);
});
