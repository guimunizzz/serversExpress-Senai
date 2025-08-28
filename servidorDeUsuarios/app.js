const express = require("express")
const app = express()

// Config to accept JSON on BODY
app.use(express.json())

const PORT = 3000;

// start server on the port 3000
app.listen(PORT, () => {
  console.log(`Iniciando servidor de usuarios na porta ${PORT}`);
});
