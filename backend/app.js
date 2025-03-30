const express = require("express");
const app = express();
const PORT = 3001;
const sequelize = require('../backend/config/db')

app.listen(3001, () =>{
    console.log(`Servidor rodando na porta ${ PORT}`)
})

sequelize.authenticate()
    .then(() => {
      console.log(' Conectado ao banco de dados!');
      // Sincronizando os modelos com o banco de dados
      
    })
    .catch(err => console.error('Erro ao conectar ao banco de dados:', err));
  