const express = require("express")
const app = express()


const PORT = 3002;

// start server on the port 3002
app.listen(PORT, () => {
  console.log(`Iniciando servidor de produtos na porta ${PORT}`);
});
