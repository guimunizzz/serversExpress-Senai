const express = require("express")
const app = express()


const PORT = 3004;

// start server on the port 3004
app.listen(PORT, () => {
  console.log(`Iniciando servidor de pedidos na porta ${PORT}`);
});
