const express = require('express');
const app = express();
const port = 1313;


//import conection mongodb
const NewUser = require('./mongodb');

//Rotas
app.get('/', (req, res)=>{
    res.send('hello. TUDO OK');
});


app.post('/register', (req,res)=>{
    var novoUsuario = new NewUser({
        email: req.body.email,
        senha: req.body.senha,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        chave: true
    });
    
    novoUsuario.save().then(()=>{
        console.log('Usuário Cadastrado com sucesso!');
    }).catch((err)=>{
        console.log('Deu esse erro, fiote: ', err);
    });

    
});

//Rotas mongodb


// iniciar servidor
app.listen(port, ()=>{
    console.log('Servidor rodando blz');
});

