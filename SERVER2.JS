 require('dotenv').config(); // Carrega as variáveis do arquivo .env para o process.env
const express = require('express');
const cpfController = require('./cpfController.controller');
const app = express();

app.use(express.json());
 
// rota ou endpoint
app.get('/', (req, res) => {
    return res.json({message:'API TI-325 rodando....'});
})
 
// request, response  
app.get('/ping', (req, res) => {
    return res.json({message:'ping pong'});
})

// rota post chamando diretamente a função controller recebecpf
app.post('/cpf',cpfController.recebeCpf);
 
 
const PORT = process.env.PORT;
app.listen(PORT, () => {
//  console.log('Servidor rodando... em http://localhost:3000')
    console.log(`Servidor rodando... em http://localhost:${PORT}`)
})
 
 
app.post('/usuario', (req, res) =>  {
    const nome = req.body.nome;
    const idade = req.body.idade;
   // const { nome, idade} = req.body;
   
 
 
    return res.json({
        mensagem: 'dados recebidos e processados com sucesso',
        nome,
        idade
    })
})
 
//transformaçoes
//1. converter o nome para maiusculas
//2.calcula o ano aproximado de nascimento
//. adiciona um status peraonalizado
const nomeFormatado = nome ? nome.toUppercase() :'não informado'; // o ? é considerado o IF do javascript
const anoNascimento = new Date ().getFullYear() - idade;
 
return res.json({
    mensagem : ' dados recebidos e rpocessados com sucesso',
    dadosOriginais: {nome,idade},
    dadosProcessados: {
        nomeFormatado,
        idade,
        anoNascimentoAproximado: anoNascimento,
        perfil: idade >18? 'adulto' : 'adolescente' // um exemplo utilizando o TRUE e FALSE, se a idade for maior que 18, vai aparecer como ADULTO e ao contráro, como ADOLESCENTE
 
    }
})
 