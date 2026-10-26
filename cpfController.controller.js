function validarCpfSimples(cpfOriginal) {
    
    
    if(!cpfOriginal) return {valido: false, motivo:' CPF não foi informado'};

    // remove caracteres especiais (pontos e traço) exibindo apenas numeros 
    // replace = trocar 
    // /\D/g expressão regular
    // \D significa qualquer caracter que não seja um digito numerico
    // /.../ as barras no inicio e no fim servem para delimitar onde começa e termina a expressaõ regular do javascript 
    // g é a flag global. ela diz ao javascript paara substituir todas as ocorrencias

    const apenasNumeros = String(cpfOriginal).replace(/\D/g, '');

    // verifica se possui exatamente 11 digitos 
    if (apenasNumeros.length !==11){
        return {
            valido: false,
            motivo: `O cpf deve ter 11 digitos (voce enviou ${apenasNumeros.length})`
        }
    }
    // 3. verifica se todos os digitos são iguais é inválido
    // legnth é uma propriedade que conta quantps numeros tem

        const todosIguais = /^(\d)\1{10}\$/.test(apenasNumeros);
        if (todosIguais) {
            return { valido: false, motivo: 'CPF com todos os digitos iguais é invalido'
        };
}
return {
    valido:true,
    motivo: 'CPF possui formato e tamanho válidos!',
    cpfLimpo: apenasNumeros
}
}

// 2. Objeto do controller (contém os metodos chamados pelas rotas)

const cpfController = {
    // metodo 1 = apenas e recebe e confirma
    receberCpf: (req, res) => {
        const {cpf} = req.body 
        
        return res.json({
            sucesso:true,
            mensagem: 'CPF recebid np Controller com sucesso',
            cpfEnviado: cpf
        });
},
// Metodo 2: recdebe e valida usando a função auxiliar. 
validarCpf: (req,res) => {
    const {cpf} = req.body
    // ligação: a função do controller chama a função auxiliar criada lá no topo
    const resultado = validarCpfSimples(cpf);
    if(!resultado.valido){
        return res.status(400).json({
            status:'erro',
            valido:false,
            cpfEnviado:cpf,
            mensagem:resultado.motivo
        })
    }
}
}


module.exports = cpfController; 