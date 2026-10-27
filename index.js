const express = require('express');
const app = express();

// Habilitada orecebimento de JSON no corpo das requisições
app.use(express.json());

// rota GET raiz
app.get('/', (req,res) => {
    res.send({mensagem: 'Servidor rodando com sucesso!!!'});
});

// rota post para produto
app.post('/produto', (req,res) => {
    const dadosProduto = req.body;
    res.status(201).json({
        mensagem: 'Produto recebido com sucesso!'
        produto: dadosProduto
    });

});

// definindo a porta que o servidor vai rodar 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}´)
})