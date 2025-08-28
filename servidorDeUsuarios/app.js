const express = require("express")
const app = express()

const PORT = 3000;

// start server on the port 3000
app.listen(PORT, () => {
  console.log(`Iniciando servidor de usuarios na porta ${PORT}`);
});
