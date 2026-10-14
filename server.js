require('dotenv').config(); // carrega as variaveis do arquivo .env para o process env
const express = require('express'); 
const app = express(); //app está encapsulado no express 
// rota ou endpoint 
app.get('/ping',(req,res) => {
    return res.json({message:'pong'});
    // todo json é baseado em {chave:'valor'} 
}) 
const port = process.env.PORT; // não precisa mexer no arquivo server, apenas no arquivo.env
app.listen(PORT,() => {
    console.log('Servidor rodando em http://localhost:3000')
    console.log(`Servidor rodando em http://localhost:${PORT}`)// quando coloca crase, escreve texto e concatena com variavels
})
// request é quando voce passa os dados e responde é quando o banco te passa os dados
// return é resposta 
// listen é para rodar o item que você colocar, essa é a rota 
