const express = require("express");
const app = express();
const PORT = 3001;

app.listen(3001, () =>{
    console.log(`Servidor rodando na porta ${ PORT}`)
})